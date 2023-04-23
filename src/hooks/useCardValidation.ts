import { useState } from 'react';
import { CardInputValidation } from '../types';

const useCardValidator = () => {
  const [cardInputValidation, setCardInputValidation] = useState<CardInputValidation>({
    issuer: false,
    cardNumber: false,
    expirationDate: false,
    ownerName: true,
    securityCode: false,
    password: false,
  });

  const handleValidationChange = (key: keyof CardInputValidation, value: boolean) => {
    setCardInputValidation((cardInputValidation) => {
      return {
        ...cardInputValidation,
        [key]: value,
      };
    });
  };

  return [cardInputValidation, handleValidationChange] as const;
};

export { useCardValidator };
