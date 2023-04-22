import { useState } from 'react';
import Card from '../@common/Card';
import CreditCardContext from '../../contexts/InputValueContext';
import CardRegisterForm from '../registerForm/cardRegisterForm/CardRegisterForm';
import CreditCardInfo from '../../@types/creditCardInfo';

function RegisterPage() {
  const [creditCardEntered, setCreditCardEntered] = useState<CreditCardInfo>({
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    ownerName: '',
    securityCode: '',
    password: ['', ''],
    bank: '현대카드',
  });

  console.log('>>> creditCardEntered:', creditCardEntered);

  const { cardNumber, expirationDate, ownerName } = creditCardEntered;

  const setCreditCard = <T extends keyof CreditCardInfo>(
    target: T,
    newValue: CreditCardInfo[T]
  ) => {
    //! 실행X
    console.log('>>> :setCreditCard');
    setCreditCardEntered((prev) => ({
      ...prev,
      [target]: newValue,
    }));
  };

  return (
    <CreditCardContext.Provider value={[creditCardEntered, setCreditCard]}>
      <Card
        cardNumber={cardNumber.join(' ')}
        expirationDate={expirationDate.join(' / ')}
        ownerName={ownerName}
      />
      <CardRegisterForm />
    </CreditCardContext.Provider>
  );
}

export default RegisterPage;
