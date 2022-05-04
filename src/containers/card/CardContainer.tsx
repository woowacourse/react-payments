import React from 'react';
import { createAction } from 'context/Provider';
import { useAppDispatch, useAppState } from 'hooks/hooks';
import { ActionType } from 'types';
import Card from 'components/card/Card';

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

  const handleCardClick = () => {
    dispatch(createAction(ActionType.CHANGE_CARD_TYPE, true));
  };

  return (
    <>
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
    </>
  );
}

export default CardContainer;
