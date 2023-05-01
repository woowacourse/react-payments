import { useEffect, useState } from 'react';

import * as Type from '@Types/index';

import { CREDIT_CARD_LENGTH } from '@Constants/creditCard';

const useCreditCardValidation = (
  creditCard: Partial<Omit<Type.CreditCard, 'id'>>,
  errorMessages: (string | null)[],
) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const result = errorMessages.every((errorMessage) => {
      if (errorMessage) return false;
      return true;
    });
    setIsValid(result);

    if (!creditCard.company) setIsValid(false);

    if (creditCard.numbers && creditCard.numbers.length !== CREDIT_CARD_LENGTH.numbers) setIsValid(false);

    if (creditCard.expiry && creditCard.expiry.length !== CREDIT_CARD_LENGTH.expiry) setIsValid(false);

    if (creditCard.cvc && creditCard.cvc.length !== CREDIT_CARD_LENGTH.cvc) setIsValid(false);

    if (
      (creditCard.password && creditCard.password.first.length !== CREDIT_CARD_LENGTH.password) ||
      (creditCard.password && creditCard.password.second.length !== CREDIT_CARD_LENGTH.password)
    ) {
      setIsValid(false);
    }
  }, [errorMessages]);

  return isValid;
};

export default useCreditCardValidation;
