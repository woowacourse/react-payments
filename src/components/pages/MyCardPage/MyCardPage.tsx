import { useNavigate } from 'react-router-dom';
import { useCardListValue } from '../../../context/CardListContext';

import * as styled from './MyCardPage.styled';

import { Header, Card } from '../../';

import { CardInfo } from '../../../types/card';

const MyCardPage = () => {
  const navigation = useNavigate();

  const cardList = useCardListValue();

  return (
    <styled.MyCardPage>
      <Header />
      <styled.CardRegisterMessage>새로운 카드를 등록해 주세요</styled.CardRegisterMessage>
      <styled.CardRegisterButton onClick={() => navigation('/register')}>
        <styled.ButtonIcon>+</styled.ButtonIcon>
      </styled.CardRegisterButton>
      <styled.CardList>
        {cardList?.map((cardInfo: CardInfo) => (
          <div key={cardInfo.id}>
            <Card cardInfo={cardInfo} />
            <styled.Nickname>{cardInfo.nickname}</styled.Nickname>
          </div>
        ))}
      </styled.CardList>
    </styled.MyCardPage>
  );
};

export default MyCardPage;
