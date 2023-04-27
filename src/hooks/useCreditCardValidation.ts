import { useEffect, useState } from 'react';

import * as Type from '@Types/index';

const useCreditCardValidation = (creditCard: Omit<Type.CreditCard, 'id'>, errorMessages: (string | null)[]) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const result = errorMessages.every((errorMessage) => {
      if (errorMessage) return false;
      return true;
    });
    setIsValid(result);

    if (creditCard.numbers.length !== 16) setIsValid(false);

    if (creditCard.expiry.length !== 5) setIsValid(false);

    if (creditCard.cvc.length !== 3) setIsValid(false);

    if (creditCard.password.first.length !== 1 || creditCard.password.second.length !== 1) setIsValid(false);
  }, [errorMessages]);

  return isValid;
};

export default useCreditCardValidation;
