import { useState } from 'react';
import {
  isValidCardNumber,
  isValidExpirationDate,
  isValidOwnerName,
  isValidPassword,
  isValidSecurityCode,
} from '../cardInputValidator';
import { CardCompany } from '../types';

export const useCardRegisterForm = () => {
  const [cardCompany, setCardCompany] = useState<CardCompany>('현대카드');
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
    cardCompany,
    cardNumber,
    expirationDate,
    ownerName,
    securityCode,
    password,
    setCardCompany,
    setCardNumber,
    setExpirationDate,
    setOwnerName,
    setSecurityCode,
    setPassword,
    isValidCardForm,
  };
};
