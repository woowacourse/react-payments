/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import * as T from 'types';
import { convertSecuredCreditCard } from 'domains/creditCard';
import * as S from './style';

export type CreditCardProps = {
  fullFilled: boolean;
  creditCard: Pick<T.CreditCard, 'company' | 'number' | 'expiry' | 'owner'>;
};

function CreditCard({
  fullFilled, creditCard: {
    company, expiry, number, owner
  }
}: CreditCardProps) {
  const isValid = () => {
    if (!fullFilled) return true;

    if (number.length !== 16) return false;
    if (!number) return false;

    if (!expiry) return false;

    return true;
  };

  return (
    <S.CreditCardLayout isValid={isValid()}>
      <S.CreditCardInfoHeader>
        <S.CreditCardCompany>{company}</S.CreditCardCompany>
      </S.CreditCardInfoHeader>
      <S.CreditCardICChip />
      <S.CreditCardInfoFooter>
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
      </S.CreditCardInfoFooter>
    </S.CreditCardLayout>
  );
}
export default CreditCard;
