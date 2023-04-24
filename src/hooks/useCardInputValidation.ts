import { useCallback, useState } from 'react';
import { CardFormValidation } from '../types';
import validator, { validateMultipleInputField } from '../utils/validator';

const initialValue: CardFormValidation = {
  issuer: false,
  cardNumber: false,
  expirationDate: false,
  ownerName: true,
  securityCode: false,
  password: false,
};

const useCardInputValidation = () => {
  const [cardInputValidation, setCardInputValidation] = useState(initialValue);

  const handleValidationChange = useCallback(
    (key: keyof CardFormValidation, value: string | string[]) => {
      const isValid = !validateMultipleInputField(key)
        ? validator[key](value as string)
        : validator[key](value as string[]);

      setCardInputValidation((cardValidation) => {
        return {
          ...cardValidation,
          [key]: isValid,
        };
      });

      return isValid;
    },
    []
  );

  return [cardInputValidation, handleValidationChange] as const;
};

export { useCardInputValidation };
