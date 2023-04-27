import * as Type from '@Types/index';

import CARD_COMPANY from '@Constants/CardCompany';

import * as S from './style';

export type CreditCardCompanyType = {
  company: Type.CardCompanies;
  handleClick: () => void;
};

function CreditCardCompany({ company, handleClick }: CreditCardCompanyType) {
  return (
    <S.CardCompanyLayout onClick={handleClick}>
      <S.CardCompanyLogo src={CARD_COMPANY[company].logo} alt={CARD_COMPANY[company].name} />
      <S.CardCompanyName>{CARD_COMPANY[company].name}</S.CardCompanyName>
    </S.CardCompanyLayout>
  );
}

export default CreditCardCompany;
