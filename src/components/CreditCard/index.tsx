/* eslint-disable react/no-array-index-key */
import creditCard from '@Domains/creditCard';

import useCreditCardValidation from '@Hooks/useCreditCardValidation';

import CARD_COMPANY from '@Constants/cardCompany';

import * as S from './style';
import { CreditCardProps } from './type';

function CreditCard({ fullFilled = true, expiry, numbers, owner, company }: CreditCardProps) {
  const isValid = useCreditCardValidation({ expiry, numbers, owner, company }, []);

  return (
    <S.CreditCardLayout
      isValid={!fullFilled || isValid}
      backgroundColor={company && CARD_COMPANY[company].uniqueColor}
      fontColor={company && CARD_COMPANY[company].fontColor}
    >
      <S.CreditCardCompanyName>{company && CARD_COMPANY[company].name}</S.CreditCardCompanyName>
      <S.CreditCardICChip />
      <S.CreditCardInfoLayout>
        <S.CreditCardNumber>
          {creditCard.convertSecuredCreditCard(numbers).map((num, idx) => (
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
