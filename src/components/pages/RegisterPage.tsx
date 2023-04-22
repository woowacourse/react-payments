import { useState } from 'react';
import Card from '../@common/Card';
import CreditCardContext from '../../contexts/InputValueContext';
import CardRegisterForm from '../registerForm/cardRegisterForm/CardRegisterForm';
import CreditCardInfo from '../../@types/creditCardInfo';

function RegisterPage() {
  const [creditCardEntered, setCreditCardEntered] = useState<CreditCardInfo>({
    cardNumber: '',
    expirationDate: ['', ''],
    ownerName: '',
    securityCode: '',
    password: '',
    bank: '현대카드',
  });

  const refineCardNumber = (cardNumber: string) => {
    return [...cardNumber].reduce((acc, cur, idx) => {
      let toAdd = cur;

      if (idx > 8) {
        toAdd = '•';
      }

      if (idx !== 0 && idx % 4 === 0) {
        return acc + ' ' + toAdd;
      } else {
        return acc + toAdd;
      }
    }, '');
  };

  const refineExpirationDate = (expirationDate: [string, string]) => {
    return expirationDate.join(' / ');
  };

  return (
    <CreditCardContext.Provider value={[creditCardEntered, setCreditCardEntered]}>
      <Card
        cardNumber={refineCardNumber(creditCardEntered.cardNumber)}
        expireDate={refineExpirationDate(creditCardEntered.expirationDate)}
        ownerName={creditCardEntered.ownerName}
      />
      <CardRegisterForm />
    </CreditCardContext.Provider>
  );
}

export default RegisterPage;
