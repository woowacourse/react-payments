import { useCallback, useState } from 'react';
import { CardFormValidation } from '../../types';
import validator, { validateMultipleInputField } from '../../utils/validator';

const initialValidationValue: CardFormValidation = {
  issuer: false,
  cardNumber: false,
  expirationDate: false,
  ownerName: true,
  securityCode: false,
  password: false,
};

const initialErrorValue: CardFormValidation = {
  issuer: false,
  cardNumber: false,
  expirationDate: false,
  ownerName: false,
  securityCode: false,
  password: false,
};

const useCardInputValidation = () => {
  const [inputValidation, setInputValidation] = useState(initialValidationValue);
  const [inputError, setInputError] = useState(initialErrorValue);

  const validateInput = useCallback((key: keyof CardFormValidation, value: string | string[]) => {
    return !validateMultipleInputField(key)
      ? validator[key](value as string)
      : validator[key](value as string[]);
  }, []);

  const updateInputValidation = useCallback(
    (key: keyof CardFormValidation, value: string | string[]) => {
      const isValid = validateInput(key, value);
      setInputValidation((inputValidation) => ({ ...inputValidation, [key]: isValid }));

      if (isValid) setInputError((inputError) => ({ ...inputError, [key]: !isValid }));
    },
    [validateInput]
  );

  const updateInputError = useCallback(
    (key: string, value: string | string[]) => {
      const isValid = validateInput(key as keyof CardFormValidation, value);
      setInputError((inputError) => ({ ...inputError, [key]: !isValid }));
    },
    [validateInput]
  );

  return { inputValidation, inputError, updateInputValidation, updateInputError };
};

export { useCardInputValidation };
