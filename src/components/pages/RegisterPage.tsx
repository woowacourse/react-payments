import Card from '../@common/card/Card';
import { CreditCardContext } from '../../contexts/CreditCardContext';
import CardRegisterForm from '../registerForm/cardRegisterForm/CardRegisterForm';
import { useContext } from 'react';

import SelectCompanyModal from '../selectCompanyModal/SelectCompanyModal';
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
        <SelectCompanyModal onClose={closeModal}></SelectCompanyModal>
      </BottomModal>
    </>
  );
}

export default RegisterPage;
