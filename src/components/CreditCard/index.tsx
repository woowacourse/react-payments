/* eslint-disable react/no-array-index-key */
import creditCard from '@Domains/creditCard';

import CARD_COMPANY from '@Constants/CardCompany';

import * as S from './style';
import { CreditCardProps } from './type';

function CreditCard({ fullFilled, creditCard: { expiry, number, owner, company } }: CreditCardProps) {
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
      backgroundColor={company && CARD_COMPANY[company].uniqueColor}
      fontColor={company && CARD_COMPANY[company].fontColor}
    >
      <S.CreditCardCompanyName>{company && CARD_COMPANY[company].name}</S.CreditCardCompanyName>
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
