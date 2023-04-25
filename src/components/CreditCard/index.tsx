/* eslint-disable react/no-array-index-key */
import creditCard from '@Domains/creditCard';

import * as Type from '@Types/index';

import CARD_COMPANY from '@Constants/CardCompany';

import * as S from './style';

export type CreditCardProps = {
  fullFilled: boolean;
  company: keyof typeof CARD_COMPANY;
  creditCard: Pick<Type.CreditCard, 'number' | 'expiry' | 'owner'>;
};

function CreditCard({ fullFilled, company, creditCard: { expiry, number, owner } }: CreditCardProps) {
  const isValid = () => {
    if (!fullFilled) return true;

    if (number.length !== 16) return false;
    if (!number) return false;

    if (!expiry) return false;

    return true;
  };

  return (
    <S.CreditCardLayout
      isValid={isValid()}
      backgroundColor={CARD_COMPANY[company].uniqueColor}
      fontColor={CARD_COMPANY[company].fontColor}
    >
      <S.CreditCardCompanyName>{CARD_COMPANY[company].name}</S.CreditCardCompanyName>
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
