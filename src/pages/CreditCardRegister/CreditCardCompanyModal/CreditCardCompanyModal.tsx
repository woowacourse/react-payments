import CreditCardCompanyType from '@Components/CreditCardCompany';
import Modal from '@Components/Modal';

import * as Type from '@Types/index';

import useAnimationModal from '@Hooks/useAnimationModal';

import CARD_COMPANY from '@Constants/cardCompany';

import * as S from './style';
import { CreditCardCompanyModalProps } from './type';

function CreditCardCompanyModal({ updateCompany }: CreditCardCompanyModalProps) {
  const { closeModal } = useAnimationModal();

  const handleClickCardCompany = (company: Type.CreditCardCompanies) => {
    updateCompany(company);
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
