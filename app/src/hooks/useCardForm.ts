import { useState } from 'react';
import type { CardCompany } from '../context/CardContext';
import { BrandValidator } from '../validators/BrandValidator';

export function useCardForm() {
  const [cardCompany, setCardCompany] = useState<CardCompany>('');

  const [cardNumber, setCardNumber] = useState(['', '', '', '']);

  const [cardExpiryDate, setCardExpiryDate] = useState({
    'expiry-month': '',
    'expiry-year': '',
  });

  const [cardCVC, setCardCVC] = useState('');

  const [cardPassword, setCardPassword] = useState('');

  const networkBrand = BrandValidator.detectNetworkBrand(cardNumber.join('')).brand;
  const lastDigitLength = networkBrand === 'diners' ? 2 : networkBrand === 'amex' ? 3 : 4;
  const isFormComplete =
    cardCompany !== '' &&
    cardNumber[0].length === 4 &&
    cardNumber[1].length === 4 &&
    cardNumber[2].length === 4 &&
    cardNumber[3].length === lastDigitLength &&
    cardExpiryDate['expiry-month'].length === 2 &&
    cardExpiryDate['expiry-year'].length === 2 &&
    cardCVC.length === 3 &&
    cardPassword.length === 2;

  return {
    cardCompany,
    cardNumber,
    cardExpiryDate,
    cardCVC,
    cardPassword,
    isFormComplete,
    setCardCompany,
    setCardNumber,
    setCardExpiryDate,
    setCardCVC,
    setCardPassword,
  };
}
