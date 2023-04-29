import * as styled from './MyCardPage.styled';

import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card';
import Header from '../../components/Header';

import { CardInfo } from '../../types/card';

interface MyCardPageProps {
  cardList: CardInfo[];
}

const MyCardPage = ({ cardList }: MyCardPageProps) => {
  const navigation = useNavigate();

  return (
    <styled.MyCardPage>
      <Header />
      <styled.CardRegisterMessage>새로운 카드를 등록해 주세요</styled.CardRegisterMessage>
      <styled.CardRegisterButton onClick={() => navigation('/register')}>
        <styled.ButtonIcon>+</styled.ButtonIcon>
      </styled.CardRegisterButton>
      <styled.CardList>
        {cardList.map((cardInfo) => (
          <div>
            <Card key={cardInfo.id} cardInfo={cardInfo} />
            <styled.Nickname>{cardInfo.nickname}</styled.Nickname>
          </div>
        ))}
      </styled.CardList>
    </styled.MyCardPage>
  );
};

export default MyCardPage;
