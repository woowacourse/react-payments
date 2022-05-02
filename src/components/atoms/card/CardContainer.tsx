import React from 'react';
import { INPUT } from '../../../constants';
import { useAppState } from '../../../hooks/hooks';
import { transformNumToBullet, transformToMMYY } from '../../../utils';
import Card from './Card';

function CardContainer() {
  const { cardNumber, name, expiredPeriod, cvc, password } = useAppState();

  const transform = (str: string) => {
    return [4, 8, 12, 16]
      .map((index) => {
        const part = str.slice(index - 4, index);
        if (index >= 12) {
          return transformNumToBullet(part);
        }
        return str.slice(index - 4, index);
      })
      .filter((part: string) => part)
      .join(' ');
  };

  const isActive = !!(
    cardNumber.length === INPUT.MAX_CARD_NUMBER_LENGTH &&
    expiredPeriod.length === INPUT.MAX_EXPIRED_PERIOD_LENGTH &&
    name.length > INPUT.MIN_NAME_LENGTH &&
    cvc.length === INPUT.MAX_CVC_LENGTH &&
    password[INPUT.FIRST_PASSWORD] &&
    password[INPUT.SECOND_PASSWORD]
  );

  return (
    <Card
      isActive={isActive}
      cardNumber={transform(cardNumber)}
      name={name}
      expiredPeriod={transformToMMYY(expiredPeriod)}
    ></Card>
  );
}

export default CardContainer;
