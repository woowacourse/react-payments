/* eslint-disable @typescript-eslint/no-unused-vars */
import CreditCard from 'components/CreditCard/CreditCard';
import useCreditCardList from 'hooks/useCreditCardList';
import { useEffect, useState } from 'react';
import * as T from 'types';

interface CreditCardNicknameInputFormProps {
  cardNumber: string;
}
function CreditCardNicknameInputForm({ cardNumber }: CreditCardNicknameInputFormProps) {
  const [creditCard, setCreditCard] = useState<Pick<T.CreditCard, 'companyId' | 'number' | 'expiry' | 'owner'>>({
    companyId: '',
    number: '',
    expiry: '',
    owner: '',
  });

  const { findCreditCardByNumber } = useCreditCardList();

  useEffect(() => {
    const foundCreditCard = findCreditCardByNumber(cardNumber);
    if (foundCreditCard) {
      setCreditCard(foundCreditCard);
    }
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
