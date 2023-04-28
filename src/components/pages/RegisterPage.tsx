import Card from '../@common/Card';
import { CreditCardContext } from '../../contexts/CreditCardContext';
import CardRegisterForm from '../registerForm/cardRegisterForm/CardRegisterForm';
import { useContext } from 'react';

import BankSelectModal from '../SelectCompanyModal/SelectCompanyModal';
import useBottomModal from '../../hooks/useBottomModal';
import CreditCardContextType from '../../@types/creditCardContextType';

function RegisterPage() {
  const { BottomModal, closeModal, openModal } = useBottomModal(true);
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
      <BottomModal>
        <BankSelectModal onClose={closeModal}></BankSelectModal>
      </BottomModal>
    </>
  );
}

export default RegisterPage;
