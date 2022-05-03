import React from 'react';
import { INPUT } from '../../../constants';
import { useAppState } from '../../../hooks/hooks';
import Card from './Card';

function CardContainer() {
  const {
    firstInputCardNumber,
    secondInputCardNumber,
    thirdInputCardNumber,
    fourthInputCardNumber,
    name,
    expiredPeriodMonth,
    expiredPeriodYear,
    cvc,
    firstPassword,
    secondPassword,
  } = useAppState();

  const isActive = !!(
    firstInputCardNumber.length === INPUT.MAX_CARD_NUMBER_PART_LENGTH &&
    secondInputCardNumber.length === INPUT.MAX_CARD_NUMBER_PART_LENGTH &&
    thirdInputCardNumber.length === INPUT.MAX_CARD_NUMBER_PART_LENGTH &&
    fourthInputCardNumber.length === INPUT.MAX_CARD_NUMBER_PART_LENGTH &&
    expiredPeriodMonth.length === INPUT.MAX_EXPIRED_PERIOD_MONTH_LENGTH &&
    expiredPeriodYear.length === INPUT.MAX_EXPIRED_PERIOD_YEAR_LENGTH &&
    cvc.length === INPUT.MAX_CVC_LENGTH &&
    firstPassword.length === INPUT.MAX_FIRST_PASSWORD_LENGTH &&
    secondPassword.length === INPUT.MAX_SECOND_PASSWORD_LENGTH
  );

  return (
    <>
      <Card
        isActive={isActive}
        firstInputCardNumber={firstInputCardNumber}
        secondInputCardNumber={secondInputCardNumber}
        thirdInputCardNumber={thirdInputCardNumber}
        fourthInputCardNumber={fourthInputCardNumber}
        name={name}
        expiredPeriodMonth={expiredPeriodMonth}
        expiredPeriodYear={expiredPeriodYear}
      />
    </>
  );
}

export default CardContainer;
