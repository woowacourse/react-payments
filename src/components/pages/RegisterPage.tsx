import Card from '../@common/Card';
import { CreditCardContext } from '../../contexts/CreditCardContext';
import CardRegisterForm from '../registerForm/cardRegisterForm/CardRegisterForm';
import { useContext } from 'react';

import BankSelectModal from '../SelectCompanyModal/SelectCompanyModal';
import { KOR_NAME_BY_CARD_COMPANY, COLOR_BY_CARD_COMPANY } from '../../@types/cardCompany';
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
        cardCompany={KOR_NAME_BY_CARD_COMPANY[cardCompany]}
        cardColor={COLOR_BY_CARD_COMPANY[cardCompany]}
      />
      <CardRegisterForm />
      <BottomModal>
        <BankSelectModal onClose={closeModal}></BankSelectModal>
      </BottomModal>
    </>
  );
}

export default RegisterPage;
