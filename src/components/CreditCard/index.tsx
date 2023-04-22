/* eslint-disable react/no-array-index-key */
import React from 'react';
import * as Type from 'types';
import creditCard from '../../domains/creditCard';
import * as Style from './style';

export type CreditCardProps = {
  fullFilled: boolean;
  creditCard: Pick<Type.CreditCard, 'number' | 'expiry' | 'owner'>;
};

function CreditCard({ fullFilled, creditCard: { expiry, number, owner } }: CreditCardProps) {
  const isValid = () => {
    if (!fullFilled) return true;

    if (number.length !== 16) return false;
    if (!number) return false;

    if (!expiry) return false;

    return true;
  };

  return (
    <Style.CreditCardLayout isValid={isValid()}>
      <Style.CreditCardICChip />
      <Style.CreditCardInfoLayout>
        <Style.CreditCardNumber>
          {creditCard.convertSecuredCreditCard(number).map((num, idx) => (
            <div key={idx}>{num}</div>
          ))}
        </Style.CreditCardNumber>
        <Style.CreditCardContainer>
          <Style.CreditCardBox>{owner}</Style.CreditCardBox>
          <Style.CreditCardBox>{expiry}</Style.CreditCardBox>
        </Style.CreditCardContainer>
      </Style.CreditCardInfoLayout>
    </Style.CreditCardLayout>
  );
}

export default CreditCard;
