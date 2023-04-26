import { useState } from 'react';
import {
  isValidCardNumber,
  isValidExpirationDate,
  isValidOwnerName,
  isValidPassword,
  isValidSecurityCode,
} from '../cardInputValidator';

export const useCardRegisterForm = () => {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState({ month: '', year: '' });
  const [ownerName, setOwnerName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState(['', '']);

  const isValidCardForm =
    isValidCardNumber(cardNumber) &&
    isValidExpirationDate(expirationDate) &&
    isValidOwnerName(ownerName) &&
    isValidSecurityCode(securityCode) &&
    isValidPassword(password);

  return {
    cardNumber,
    expirationDate,
    ownerName,
    securityCode,
    password,
    setCardNumber,
    setExpirationDate,
    setOwnerName,
    setSecurityCode,
    setPassword,
    isValidCardForm,
  };
};
