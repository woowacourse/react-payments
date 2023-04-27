/* eslint-disable @typescript-eslint/no-unused-vars */
import CreditCard from 'components/CreditCard/CreditCard';
import { useEffect, useState } from 'react';

interface CreditCardNicknameInputFormProps {
  cardNumber: string;
}
function CreditCardNicknameInputForm({ cardNumber }: CreditCardNicknameInputFormProps) {
  const [creditCard, setCreditCard] = useState({
    companyId: '',
    number: '',
    expiry: '',
    owner: '',
  });

  useEffect(() => {

  }, []);

  return (
    <CreditCard
      fullFilled
      creditCard={{
        companyId: creditCard.companyId,
        number: creditCard.number,
        expiry: creditCard.expiry,
        owner: creditCard.owner,
      }}
    />
  );
}
export default CreditCardNicknameInputForm;
