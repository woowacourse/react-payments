import CardCompany from '@Components/CardCompany';
import Modal from '@Components/Modal';

import * as Type from '@Types/index';

import CARD_COMPANY from '@Constants/CardCompany';

import * as S from './style';

type CreditCardCompanyModalProps = {
  setCreditCardCompany: React.Dispatch<React.SetStateAction<Type.CardCompanies | undefined>>;
};

function CreditCardCompanyModal({ setCreditCardCompany }: CreditCardCompanyModalProps) {
  return (
    <Modal closeModal={() => {}} isAbleBackdropClick={false}>
      <S.CardCompanyLayout>
        {(Object.keys(CARD_COMPANY) as Type.CardCompanies[]).map((company) => (
          <CardCompany company={company} key={company} handleClick={() => setCreditCardCompany(company)} />
        ))}
      </S.CardCompanyLayout>
    </Modal>
  );
}

export default CreditCardCompanyModal;
