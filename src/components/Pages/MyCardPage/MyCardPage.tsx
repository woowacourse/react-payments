import { useNavigate } from 'react-router-dom';

import { CardInfo } from '../../../types/state';
import { COLOR } from '../../../constants/cardInfo';

import * as styled from './MyCardPage.styled';
import Card from '../../Card/Card';
import { useContext } from 'react';
import CardInfoContext from '../../../contexts/CardInfoListContext';

const MyCardPage = () => {
  const { cardInfoList } = useContext(CardInfoContext);

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
      <styled.CardList>{generateCardInfoList(cardInfoList)}</styled.CardList>
      <styled.CardRegisterButtonContainer>
        <styled.CardRegisterMessage>새로운 카드를 등록해 주세요</styled.CardRegisterMessage>
        <styled.CardRegisterButton bgColor={COLOR.DEFAULT} onClick={handleClick}>
          <styled.ButtonIcon>+</styled.ButtonIcon>
        </styled.CardRegisterButton>
      </styled.CardRegisterButtonContainer>
    </styled.MyCardPage>
  );
};

export default MyCardPage;
