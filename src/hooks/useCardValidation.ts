import { useState } from 'react';
import { CardInputValidation } from '../types';
import validator, { validateMultipleInputField } from '../utils/validator';
import { isKeyOfObj } from '../utils/typeUtils';

const useCardValidator = () => {
  const [cardInputValidation, setCardInputValidation] = useState<CardInputValidation>({
    issuer: false,
    cardNumber: false,
    expirationDate: false,
    ownerName: true,
    securityCode: false,
    password: false,
  });

  const handleValidationChange = (key: string, value: string | string[]) => {
    if (!isKeyOfObj(validator, key)) return;

    const isValid = !validateMultipleInputField(key)
      ? validator[key](value as string)
      : validator[key](value as string[]);

    setCardInputValidation((cardInputValidation) => {
      return {
        ...cardInputValidation,
        [key]: isValid,
      };
    });

    return isValid;
  };

  return [cardInputValidation, handleValidationChange] as const;
};

export { useCardValidator };
