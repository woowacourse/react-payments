import React from 'react';
import * as T from 'types';
import * as S from './style';

export type CreditCardProps = {
  creditCard: Pick<T.CreditCard, 'number' | 'expiry' | 'owner'>;
};

function CreditCard({ creditCard }: CreditCardProps) {
  return (
    <S.CreditCardLayout>
      <S.CreditCardICChip />
      <S.CreditCardNumber>
        <div>1234</div>
        <div>1234</div>
        <div>****</div>
        <div>****</div>
      </S.CreditCardNumber>
      <S.CreditCardConatiner>
        <S.CreditCardBox>
          {creditCard.owner}
        </S.CreditCardBox>
        <S.CreditCardBox>
          12/34
        </S.CreditCardBox>
      </S.CreditCardConatiner>
    </S.CreditCardLayout>
  );
}
export default CreditCard;
