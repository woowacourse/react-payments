import CardCompany from '@Components/CardCompany';

import * as Type from '@Types/index';

import CARD_COMPANY from '@Constants/CardCompany';

import * as S from './style';

type CreditCardCompanyModalProps = {
  updateCompany: (company: Type.CardCompanies) => void;
  closeModal: () => void;
};

function CreditCardCompanyModal({ updateCompany, closeModal }: CreditCardCompanyModalProps) {
  const handleClickCardCompany = (company: Type.CardCompanies) => {
    updateCompany(company);
    closeModal();
  };

  return (
    <S.CardCompanyLayout>
      {(Object.keys(CARD_COMPANY) as Type.CardCompanies[]).map((company) => (
        <CardCompany company={company} key={company} handleClick={() => handleClickCardCompany(company)} />
      ))}
    </S.CardCompanyLayout>
  );
}

export default CreditCardCompanyModal;
