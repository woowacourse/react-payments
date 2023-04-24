import Card from '../@common/Card';
import { CreditCardContext } from '../../contexts/CreditCardContext';
import CardRegisterForm from '../registerForm/cardRegisterForm/CardRegisterForm';
import { useState } from 'react';
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

  const setCreditCard = <T extends keyof CreditCardInfo>(
    target: T,
    newValue: CreditCardInfo[T]
  ) => {
    setCreditCardEntered((prev) => ({
      ...prev,
      [target]: newValue,
    }));
  };

  return (
    <CreditCardContext.Provider value={[creditCardEntered, setCreditCard]}>
      <Card
        cardNumber={creditCardEntered.cardNumber}
        ownerName={creditCardEntered.ownerName}
        expirationDate={creditCardEntered.expirationDate}
      />
      <CardRegisterForm />
    </CreditCardContext.Provider>
  );
}

export default RegisterPage;
