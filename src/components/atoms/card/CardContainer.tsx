import React from 'react';
import { INPUT } from '../../../constants';
import { useAppState } from '../../../hooks/hooks';
import { transformToMMYY } from '../../../utils';
import Card from './Card';

function CardContainer() {
  const {
    firstInputCardNumber,
    secondInputCardNumber,
    thirdInputCardNumber,
    fourthInputCardNumber,
    name,
    expiredPeriod,
    cvc,
    firstPassword,
    secondPassword,
  } = useAppState();

  const isActive = !!(
    firstInputCardNumber.length === INPUT.MAX_CARD_NUMBER_PART_LENGTH &&
    secondInputCardNumber.length === INPUT.MAX_CARD_NUMBER_PART_LENGTH &&
    thirdInputCardNumber.length === INPUT.MAX_CARD_NUMBER_PART_LENGTH &&
    fourthInputCardNumber.length === INPUT.MAX_CARD_NUMBER_PART_LENGTH &&
    expiredPeriod.length === INPUT.MAX_EXPIRED_PERIOD_LENGTH &&
    cvc.length === INPUT.MAX_CVC_LENGTH &&
    firstPassword.length === 1 &&
    secondPassword.length === 1
  );

  return (
    <Card
      isActive={isActive}
      firstInputCardNumber={firstInputCardNumber}
      secondInputCardNumber={secondInputCardNumber}
      thirdInputCardNumber={thirdInputCardNumber}
      fourthInputCardNumber={fourthInputCardNumber}
      name={name}
      expiredPeriod={transformToMMYY(expiredPeriod)}
    ></Card>
  );
}

export default CardContainer;
