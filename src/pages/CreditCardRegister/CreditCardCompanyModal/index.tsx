import { Modal, useModal } from 'noah-modal';
import { useContext } from 'react';

import CreditCardCompanyType from '@Components/CreditCardCompany';

import * as Type from '@Types/index';

import { CreditCardRegisterUpdateContext } from '@Contexts/CreditCardRegister/CreditCardRegisterContext';

import CARD_COMPANY from '@Constants/CardCompany';

import * as S from './style';

function CreditCardCompanyModal() {
  const { closeModal } = useModal();

  const {
    update: { company: update },
  } = useContext(CreditCardRegisterUpdateContext);

  const handleClickCardCompany = (company: Type.CreditCardCompanies) => {
    update(company);
    closeModal();
  };

  return (
    <Modal title="카드사 선택" delayMsTime={500}>
      <S.CardCompanyLayout>
        {(Object.keys(CARD_COMPANY) as Type.CreditCardCompanies[]).map((company) => (
          <CreditCardCompanyType company={company} key={company} handleClick={() => handleClickCardCompany(company)} />
        ))}
      </S.CardCompanyLayout>
    </Modal>
  );
}

export default CreditCardCompanyModal;
