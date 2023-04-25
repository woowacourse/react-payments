/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import * as T from 'types';
import { convertSecuredCreditCard } from 'domains/creditCard';
import * as S from './style';

export type CreditCardProps = {
  fullFilled: boolean;
  creditCard: Pick<T.CreditCard, 'number' | 'expiry' | 'owner'>;
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
    <S.CreditCardLayout isValid={isValid()}>
      <S.CreditCardICChip />
      <S.Box>
        <S.CreditCardNumber>
          {convertSecuredCreditCard(number).map((num, idx) => <div key={idx}>{num}</div>)}
        </S.CreditCardNumber>
        <S.CreditCardContainer>
          <S.CreditCardBox>
            {owner}
          </S.CreditCardBox>
          <S.CreditCardBox>
            {expiry}
          </S.CreditCardBox>
        </S.CreditCardContainer>
      </S.Box>
    </S.CreditCardLayout>
  );
}
export default CreditCard;
