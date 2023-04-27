import { useState } from 'react';
import CreditCardInfo from '../@types/creditCardInfo';

const useCreditCard = (initialValue: CreditCardInfo) => {
  const [creditCard, setCreditCard] = useState<CreditCardInfo>(initialValue);

  const setCreditCardBy = <T extends keyof CreditCardInfo>(
    target: T,
    newValue: CreditCardInfo[T]
  ) => {
    setCreditCard((prev) => ({
      ...prev,
      [target]: newValue,
    }));
  };

  const initCreditCard = () => {
    setCreditCard(initialValue);
  };

  return { creditCard, setCreditCard: setCreditCardBy, initCreditCard };
};

export default useCreditCard;
