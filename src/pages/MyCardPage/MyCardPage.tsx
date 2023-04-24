import { useNavigate } from 'react-router-dom';

import { CardInfo } from '../../types/state';

import * as styled from './MyCardPage.styled';
import Card from '../../components/Card/Card';

const MyCardPage = ({ cardInfoList }: { cardInfoList: CardInfo[] }) => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation('/register');
  };

  const generateCardInfoList = (cardInfoList: CardInfo[]) => {
    return cardInfoList.map(cardInfo => {
      const key = Object.values(cardInfo.cardNumbers).join('');

      return <Card key={key} cardInfo={cardInfo} bgColor="#333333" />;
    });
  };

  return (
    <styled.MyCardPage>
      <styled.CardRegisterMessage>새로운 카드를 등록해 주세요</styled.CardRegisterMessage>
      <styled.CardRegisterButton bgColor="#E5E5E5" onClick={handleClick}>
        <styled.ButtonIcon>+</styled.ButtonIcon>
      </styled.CardRegisterButton>
      <styled.CardList>{generateCardInfoList(cardInfoList)}</styled.CardList>
    </styled.MyCardPage>
  );
};

export default MyCardPage;
