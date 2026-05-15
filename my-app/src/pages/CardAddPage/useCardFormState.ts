import { useState } from "react";
import type { CardCompany } from "../../components/cardCompanySection/CardCompanyConstants";

export interface FormState {
   cardNumber: string[],
   cardCompany: CardCompany | '',
   expirationDate: { month: string, year: string },
   cvc: string,
   password: string,
}

export const useCardFormState = () => {
  const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
  const [cardCompany, setCardCompany] = useState<CardCompany | ''>('');
  const [expirationDate, setExpirationDate] = useState({ month: '', year: '' });
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState('');

  return {
    formState: { cardNumber, cardCompany, expirationDate, cvc, password },
    setters: { setCardNumber, setCardCompany, setExpirationDate, setCvc, setPassword },
  };
};