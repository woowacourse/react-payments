/* eslint-disable react/no-array-index-key */
import React from 'react';
import * as T from 'types';
import * as S from './style';

export type CreditCardProps = {
  fullFilled: boolean;
  creditCard: Pick<T.CreditCard, 'number' | 'expiry' | 'owner'>;
};

const convertSecuredCreditCard = (number: string) => {
  const creditCardNumberLength = number.length;
  const securedCreditNumber = creditCardNumberLength <= 8
    ? number
    : number.slice(0, 8) + '•'.repeat(number.length - 8);
  return securedCreditNumber.split('').reduce((a, b, i) => {
    a[Math.floor(i / 4)].push(b);
    return a;
  }, [[], [], [], []] as string[][]);
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
      <S.Booooxx>
        <S.CreditCardNumber>
          {convertSecuredCreditCard(number).map((num, idx) => <div key={idx}>{num}</div>)}
        </S.CreditCardNumber>
        <S.CreditCardConatiner>
          <S.CreditCardBox>
            {owner}
          </S.CreditCardBox>
          <S.CreditCardBox>
            {expiry}
          </S.CreditCardBox>
        </S.CreditCardConatiner>
      </S.Booooxx>
    </S.CreditCardLayout>
  );
}
export default CreditCard;
