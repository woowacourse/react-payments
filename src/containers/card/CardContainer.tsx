import React, { useEffect } from 'react';
import axios from 'axios';
import { createAction } from 'context/Provider';
import { useAppDispatch, useAppState } from 'hooks';
import { ActionType } from 'types';
import Card from 'components/card/Card';
import { removePathnameCardEdit } from 'utils';

function CardContainer() {
  const {
    firstInputCardNumber,
    secondInputCardNumber,
    thirdInputCardNumber,
    fourthInputCardNumber,
    name,
    expiredPeriodMonth,
    expiredPeriodYear,
    cardType,
  } = useAppState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    editCard();
  }, []);

  const editCard = async () => {
    if (window.location.pathname.includes('card/edit/')) {
      const cardId = removePathnameCardEdit(window.location.pathname);
      const response = await axios(`http://localhost:4004/cards/${cardId}`, {
        method: 'get',
      });

      dispatch(createAction(ActionType.FIRST_INPUT_CARD_NUMBER, response.data.firstCardNumber));
      dispatch(createAction(ActionType.SECOND_INPUT_CARD_NUMBER, response.data.secondCardNumber));
      dispatch(createAction(ActionType.THIRD_INPUT_CARD_NUMBER, response.data.thirdCardNumber));
      dispatch(createAction(ActionType.FOURTH_INPUT_CARD_NUMBER, response.data.fourthCardNumber));
      dispatch(createAction(ActionType.INPUT_NAME, response.data.name ? response.data.name : ''));
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_MONTH, response.data.month));
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_YEAR, response.data.year));
      dispatch(createAction(ActionType.INPUT_CVC, response.data.cvcNum));
      dispatch(createAction(ActionType.FIRST_INPUT_PASSWORD, response.data.firstPasswordNum));
      dispatch(createAction(ActionType.SECOND_INPUT_PASSWORD, response.data.secondPasswordNum));
      dispatch(createAction(ActionType.COMPLETE_CARD, false));
      dispatch(createAction(ActionType.CARD_TYPE, response.data.type));
      dispatch(createAction(ActionType.INPUT_CARD_ALIAS, response.data.alias));
    }
  };

  const handleCardClick = () => {
    dispatch(createAction(ActionType.CHANGE_CARD_TYPE, true));
  };

  return (
    <Card
      firstInputCardNumber={firstInputCardNumber}
      secondInputCardNumber={secondInputCardNumber}
      thirdInputCardNumber={thirdInputCardNumber}
      fourthInputCardNumber={fourthInputCardNumber}
      name={name}
      expiredPeriodMonth={expiredPeriodMonth}
      expiredPeriodYear={expiredPeriodYear}
      cardType={cardType}
      handleCardClick={handleCardClick}
    />
  );
}

export default CardContainer;
