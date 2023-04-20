import * as styled from './MyCardPage.styled';

import { useNavigate } from 'react-router-dom';

import { CardInfo } from '../../App';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

const MyCardPage = ({ cardList }: { cardList: CardInfo[] }) => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation('/register');
  };

  const generateCardList = (cardList: CardInfo[]) => {
    return cardList.map((cardInfo) => {
      const key = Object.values(cardInfo.numbers).join('');

      return <Card key={key} cardInfo={cardInfo} bgColor="#333333" />;
    });
  };

  return (
    <styled.MyCardPage>
      <styled.CardRegisterMessage>새로운 카드를 등록해 주세요</styled.CardRegisterMessage>
      <styled.CardRegisterButton onClick={handleClick}>
        <styled.ButtonIcon>+</styled.ButtonIcon>
      </styled.CardRegisterButton>
      <styled.CardList>{generateCardList(cardList)}</styled.CardList>
    </styled.MyCardPage>
  );
};

export default MyCardPage;
