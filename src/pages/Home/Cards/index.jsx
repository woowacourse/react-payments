import React, { useCallback } from 'react';

import useCardState from '../../../hooks/useCardState';
import useCardDispatch from '../../../hooks/useCardDispatch';

import Card from '../../../system/Card';

import { CardContainerStyled, CardWrapperStyled, CardDeleteButtonStyled, AliasStyled } from './style';

import { CARD_SIZE_UNIT } from '../../../constants';

import DELETE_CARD from './action';

const Cards = ({ onClickCard }) => {
  const cards = useCardState((state) => state.cards);
  const dispatch = useCardDispatch();

  const onClickDeleteButton = (cardNumber) => useCallback(() => {
    dispatch({ type: DELETE_CARD, cardNumber });
  }, []);

  return (
    <CardContainerStyled>
      {cards.map((card) => (
        <CardWrapperStyled key={card[1]}>
          <CardDeleteButtonStyled onClick={onClickDeleteButton(card[1])}>-</CardDeleteButtonStyled>
          <Card
            size={CARD_SIZE_UNIT.SMALL}
            onClick={onClickCard(card)}
          >
            {card}
          </Card>
          <AliasStyled>{card[5]}</AliasStyled>
        </CardWrapperStyled>
      ))}
    </CardContainerStyled>
  );
};

export default Cards;
