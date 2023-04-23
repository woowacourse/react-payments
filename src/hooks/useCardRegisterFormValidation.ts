import { useEffect, useState } from 'react';
import { Card } from '../types';
import {
  isValidCardNumber,
  isValidExpirationDate,
  isValidOwnerName,
  isValidPassword,
  isValidSecurityCode,
} from '../cardInputValidator';

export const useCardRegisterFormValidation = ({
  cardNumber,
  expirationDate,
  ownerName,
  securityCode,
  password,
}: Card) => {
  const [isValidCardForm, setIsValidCardForm] = useState(false);

  useEffect(() => {
    const isValidForm =
      isValidCardNumber(cardNumber) &&
      isValidExpirationDate(expirationDate) &&
      isValidOwnerName(ownerName) &&
      isValidSecurityCode(securityCode) &&
      isValidPassword(password);

    setIsValidCardForm(isValidForm);
  }, [cardNumber, expirationDate, ownerName, securityCode, password]);

  return [isValidCardForm];
};
