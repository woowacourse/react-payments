import { useContext } from 'react';

import CreditCardCompanyType from '@Components/CreditCardCompany';
import Modal from '@Components/Modal';

import * as Type from '@Types/index';

import useAnimationModal from '@Hooks/useAnimationModal';

import { CreditCardRegisterUpdateContext } from '@Contexts/CreditCardRegister/CreditCardRegisterContext';

import CARD_COMPANY from '@Constants/cardCompany';

import * as S from './style';

function CreditCardCompanyModal() {
  const { closeModal } = useAnimationModal();

  const {
    update: { company: update },
  } = useContext(CreditCardRegisterUpdateContext);

  const handleClickCardCompany = (company: Type.CreditCardCompanies) => {
    update(company);
    closeModal();
  };

  return (
    <Modal isAbleBackdropClick={false} delayMsTime={500}>
      <S.CardCompanyLayout>
        {(Object.keys(CARD_COMPANY) as Type.CreditCardCompanies[]).map((company) => (
          <CreditCardCompanyType company={company} key={company} handleClick={() => handleClickCardCompany(company)} />
        ))}
      </S.CardCompanyLayout>
    </Modal>
  );
}

export default CreditCardCompanyModal;
