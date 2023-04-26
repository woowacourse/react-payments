import { useContext } from 'react';

import { CardInfo } from '../../types/state';
import { COLOR } from '../../constants/cardInfo';
import CardInfoListContext from '../../contexts/CardInfoListContext';

import * as styled from './CardList.styled';
import Card from '../Card/Card';

const CardList = () => {
  const { cardInfoList } = useContext(CardInfoListContext);

  const generateCardList = (cardInfoList: CardInfo[]) => {
    return cardInfoList.map(cardInfo => {
      const key = Object.values(cardInfo.cardNumbers).join('');

      return <Card key={key} cardInfo={cardInfo} bgColor={COLOR.GREY200} />;
    });
  };

  return <>{cardInfoList && <styled.CardList>{generateCardList(cardInfoList)}</styled.CardList>}</>;
};

export default CardList;
