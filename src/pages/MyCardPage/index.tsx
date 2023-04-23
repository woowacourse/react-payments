import * as styled from './MyCardPage.styled';

import { useNavigate } from 'react-router-dom';

import { CardInfo } from '../../App';

import { Card } from '../../components/';

const MyCardPage = ({ cardList }: { cardList: CardInfo[] }) => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation('/register');
  };

  const generateCardList = (cardList: CardInfo[]) => {
    return cardList.map((cardInfo) => (
      <Card key={cardInfo.id} cardInfo={cardInfo} bgColor="#333333" />
    ));
  };

  return (
    <styled.MyCardPage>
      <styled.CardRegisterMessage>새로운 카드를 등록해 주세요</styled.CardRegisterMessage>
      <styled.CardRegisterButton bgColor="#E5E5E5" onClick={handleClick}>
        <styled.ButtonIcon>+</styled.ButtonIcon>
      </styled.CardRegisterButton>
      <styled.CardList>{generateCardList(cardList)}</styled.CardList>
    </styled.MyCardPage>
  );
};

export default MyCardPage;
