import CARD_COMPANY from '@Constants/CardCompany';

import * as S from './style';
import { CreditCardCompanyProps } from './type';

function CreditCardCompany({ company, handleClick }: CreditCardCompanyProps) {
  return (
    <S.CardCompanyLayout onClick={handleClick}>
      <S.CardCompanyLogo src={CARD_COMPANY[company].logo} alt={CARD_COMPANY[company].name} />
      <S.CardCompanyName>{CARD_COMPANY[company].name}</S.CardCompanyName>
    </S.CardCompanyLayout>
  );
}

export default CreditCardCompany;
