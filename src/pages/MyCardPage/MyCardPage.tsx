import { useNavigate } from 'react-router-dom';

import { CardInfo } from '../../types/state';

import * as styled from './MyCardPage.styled';
import Card from '../../components/Card/Card';
import { COLOR } from '../../constants/cardInfo';

const MyCardPage = ({ cardInfoList }: { cardInfoList: CardInfo[] }) => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation('/register');
  };

  const generateCardInfoList = (cardInfoList: CardInfo[]) => {
    return cardInfoList.map(cardInfo => {
      const key = Object.values(cardInfo.cardNumbers).join('');

      return <Card key={key} cardInfo={cardInfo} bgColor={COLOR.GREY200} />;
    });
  };

  return (
    <styled.MyCardPage>
      <styled.CardRegisterMessage>새로운 카드를 등록해 주세요</styled.CardRegisterMessage>
      <styled.CardRegisterButton bgColor={COLOR.DEFAULT} onClick={handleClick}>
        <styled.ButtonIcon>+</styled.ButtonIcon>
      </styled.CardRegisterButton>
      <styled.CardList>{generateCardInfoList(cardInfoList)}</styled.CardList>
    </styled.MyCardPage>
  );
};

export default MyCardPage;
