import { useState } from 'react';
import {
  CardIssuerSelectorType,
  CardNumberInputType,
  CVCInputValueType,
  ExpirationDateInputType,
  PasswordInputType,
} from '../config/inputField';
import { CardType } from '../config/card';

export function useCardFormInputs() {
  const [cardNumber, setCardNumber] = useState<
    Record<CardNumberInputType, string>
  >({
    cardNumberPart1: '',
    cardNumberPart2: '',
    cardNumberPart3: '',
    cardNumberPart4: '',
  });

  const [expirationDate, setExpirationDate] = useState<
    Record<ExpirationDateInputType, string>
  >({
    expirationDatePart1: '',
    expirationDatePart2: '',
  });

  const [CVC, setCVC] = useState<Record<CVCInputValueType, string>>({
    CVCPart1: '',
  });

  const [password, setPassword] = useState<Record<PasswordInputType, string>>({
    passwordPart1: '',
  });

  const [cardIssuer, setCardIssuer] = useState<CardIssuerSelectorType | null>(
    null
  );

  const checkCardType = (value: string) => {
    if (value.startsWith('4')) return 'visa';
    else if (Number(value) >= 51 && Number(value) <= 55) return 'master';
    return null;
  };
  const cardType: CardType = checkCardType(cardNumber.cardNumberPart1);

  return {
    cardNumber,
    setCardNumber,
    expirationDate,
    setExpirationDate,
    CVC,
    setCVC,
    password,
    setPassword,
    cardIssuer,
    setCardIssuer,
    cardType,
  };
}
