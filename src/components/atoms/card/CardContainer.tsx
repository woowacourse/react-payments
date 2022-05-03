import React from 'react';
import { useAppState } from '../../../hooks/hooks';
import { transformCardNumber, transformToMMYY } from '../../../utils';
import Card from './Card';

function CardContainer() {
  const { cardNumber, name, expiredPeriod, cvc, password, isEditingCVC } = useAppState();

  const isActive = !!(
    cardNumber.length === 16 &&
    expiredPeriod.length === 4 &&
    name.length > 0 &&
    cvc.length === 3 &&
    password[0] &&
    password[1]
  );

  return (
    <Card
      isActive={isActive}
      cardNumber={transformCardNumber(cardNumber)}
      name={name}
      expiredPeriod={transformToMMYY(expiredPeriod)}
      cvc={cvc}
      fliped={isEditingCVC}
    />
  );
}

export default CardContainer;
