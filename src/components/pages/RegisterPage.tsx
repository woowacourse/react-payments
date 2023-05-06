import Card from '../@common/card/Card';
import { CreditCardContext } from '../../contexts/CreditCardContext';
import CardRegisterForm from '../registerForm/cardRegisterForm/CardRegisterForm';
import { useContext } from 'react';

import useModal from '../../hooks/useModal';
import CreditCardContextType from '../../@types/creditCardContextType';
import SelectCompanyModal from '../registerForm/selectCompanyModal/SelectCompanyModal';
import BottomModal from '../@common/bottomModal/BottomModal';

function RegisterPage() {
  const { isOpen, closeModal, openModal } = useModal(true);
  const { creditCard } = useContext(CreditCardContext) as CreditCardContextType;
  const { cardNumber, cardCompany, ownerName, expirationDate } = creditCard;

  return (
    <>
      <Card
        cardNumber={cardNumber}
        ownerName={ownerName}
        expirationDate={expirationDate}
        onClick={openModal}
        cardCompany={cardCompany}
      />
      <CardRegisterForm />
      <BottomModal className="modal" isOpen={isOpen} onClose={closeModal}>
        <SelectCompanyModal onClose={closeModal}></SelectCompanyModal>
      </BottomModal>
    </>
  );
}

export default RegisterPage;
