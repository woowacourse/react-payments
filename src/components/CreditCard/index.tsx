import React from 'react';
import * as T from 'types';
import * as S from './style';

export type CreditCardProps = {
  creditCard: Pick<T.CreditCard, 'number' | 'expiry' | 'owner'>;
};

const convertSecuredCreditCard = (number: string) => {
  const creditCardNumberLength = number.length;
  const foo = creditCardNumberLength <= 8
    ? number
    : number.slice(0, 8) + '*'.repeat(number.length - 8);
  return foo.split('').reduce((a, b, i) => {
    a[Math.floor(i / 4)].push(b);
    return a;
  }, [[], [], [], []] as string[][]);
};

function CreditCard({ creditCard: { expiry, number, owner } }: CreditCardProps) {
  return (
    <S.CreditCardLayout>
      <S.CreditCardICChip />
      <S.CreditCardNumber>
        {convertSecuredCreditCard(number).map((num) => <div>{num}</div>)}
      </S.CreditCardNumber>
      <S.CreditCardConatiner>
        <S.CreditCardBox>
          {owner}
        </S.CreditCardBox>
        <S.CreditCardBox>
          {expiry}
        </S.CreditCardBox>
      </S.CreditCardConatiner>
    </S.CreditCardLayout>
  );
}
export default CreditCard;
