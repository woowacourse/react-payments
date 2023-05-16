import Card from '../common/card/Card';
import { CreditCardContext } from '../../contexts/CreditCardContext';
import CardRegisterForm from '../registerForm/cardRegisterForm/CardRegisterForm';
import { useContext, useState } from 'react';

import CreditCardContextType from '../../@types/creditCardContextType';

import Modal from 'ukko-modal/dist/Modal';
import SelectCompanyModal from '../registerForm/selectCompanyModal/SelectCompanyModal';

function RegisterPage() {
  const { creditCard } = useContext(CreditCardContext) as CreditCardContextType;
  const { cardNumber, cardCompany, ownerName, expirationDate } = creditCard;
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Modal
        trigger={
          <Card
            cardNumber={cardNumber}
            ownerName={ownerName}
            expirationDate={expirationDate}
            cardCompany={cardCompany}
            className={isLoading ? 'card-loading' : ''}
          />
        }
        isShow={true}
      >
        <SelectCompanyModal />
      </Modal>
      <CardRegisterForm isLoading={isLoading} setIsLoading={setIsLoading} />
    </>
  );
}

export default RegisterPage;
