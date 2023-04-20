/* eslint-disable react/no-array-index-key */
import React from 'react';
import * as T from 'types';
import creditCard from '../../domains/creditCard';
import * as S from './style';

export type CreditCardProps = {
  fullFilled: boolean;
  creditCard: Pick<T.CreditCard, 'number' | 'expiry' | 'owner'>;
};

function CreditCard({ fullFilled, creditCard: { expiry, number, owner } }: CreditCardProps) {
  const isVaild = () => {
    if (!fullFilled) return true;

    if (number.length !== 16) return false;
    if (!number) return false;

    if (!expiry) return false;

    return true;
  };

  return (
    <S.CreditCardLayout isVaild={isVaild()}>
      <S.CreditCardICChip />
      <S.CreditCardInfoLayout>
        <S.CreditCardNumber>
          {creditCard.convertSecuredCreditCard(number).map((num, idx) => (
            <div key={idx}>{num}</div>
          ))}
        </S.CreditCardNumber>
        <S.CreditCardContainer>
          <S.CreditCardBox>{owner}</S.CreditCardBox>
          <S.CreditCardBox>{expiry}</S.CreditCardBox>
        </S.CreditCardContainer>
      </S.CreditCardInfoLayout>
    </S.CreditCardLayout>
  );
}
export default CreditCard;
