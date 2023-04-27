import CreditCardCompanyType from '@Components/CreditCardCompany';

import * as Type from '@Types/index';

import CARD_COMPANY from '@Constants/cardCompany';

import * as S from './style';
import { CreditCardCompanyModalProps } from './type';

function CreditCardCompanyModal({ updateCompany, closeModal }: CreditCardCompanyModalProps) {
  const handleClickCardCompany = (company: Type.CreditCardCompanies) => {
    updateCompany(company);
    closeModal();
  };

  return (
    <S.CardCompanyLayout>
      {(Object.keys(CARD_COMPANY) as Type.CreditCardCompanies[]).map((company) => (
        <CreditCardCompanyType company={company} key={company} handleClick={() => handleClickCardCompany(company)} />
      ))}
    </S.CardCompanyLayout>
  );
}

export default CreditCardCompanyModal;
