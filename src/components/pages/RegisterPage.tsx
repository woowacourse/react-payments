import Card from '../@common/card/Card';
import { CreditCardContext } from '../../contexts/CreditCardContext';
import CardRegisterForm from '../registerForm/cardRegisterForm/CardRegisterForm';
import { useContext } from 'react';

import useBottomModal from '../../hooks/useBottomModal';
import CreditCardContextType from '../../@types/creditCardContextType';
import SelectCompanyModal from '../registerForm/selectCompanyModal/SelectCompanyModal';
import BottomModal from '../@common/bottomModal/BottomModal';

function RegisterPage() {
  const { isOpen, closeModal, openModal } = useBottomModal(true);
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
      <BottomModal isOpen={isOpen} onClose={closeModal}>
        <SelectCompanyModal onClose={closeModal}></SelectCompanyModal>
      </BottomModal>
    </>
  );
}

export default RegisterPage;
