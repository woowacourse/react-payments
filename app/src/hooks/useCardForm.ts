import { useState } from 'react';
import type { CardCompany } from '../context/CardContext';

export function useCardForm() {
  const [cardCompany, setCardCompany] = useState<CardCompany>('');

  const [cardNumber, setCardNumber] = useState(['', '', '', '']);

  const [cardExpiryDate, setCardExpiryDate] = useState({
    'expiry-month': '',
    'expiry-year': '',
  });

  const [cardCVC, setCardCVC] = useState('');

  const [cardPassword, setCardPassword] = useState('');

  return {
    cardCompany,
    cardNumber,
    cardExpiryDate,
    cardCVC,
    cardPassword,
    setCardCompany,
    setCardNumber,
    setCardExpiryDate,
    setCardCVC,
    setCardPassword,
  };
}
