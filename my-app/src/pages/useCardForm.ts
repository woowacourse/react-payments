import { useState } from "react";
import type { CardCompany } from "../components/cardCompanySection/CardCompanyConstants";
import { getCardBrand, getCardNumberArrayByBrand, getCardNumberError, getCvcError, getMonthError, getPasswordError, getYearError } from "../utils/Validation";

export const useCardForm = () => {
  const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
  const [cardCompany, setCardCompany] = useState<CardCompany | ''>('');
  const [expirationDate, setExpirationDate] = useState({ month: '', year: '' });
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState('');

  const brand = getCardBrand(cardNumber.join(''));
  const format = getCardNumberArrayByBrand(brand);

  const isCardNumberCorrect =
    cardNumber.length === format.length &&
    cardNumber.every((num, index) => num.length === format[index] && getCardNumberError(num, format[index]) === '');
  const isCardCompanyCorrect = cardCompany !== '';
  const isExpirationDateCorrect =
    expirationDate.month.length === 2 && expirationDate.year.length === 2 && getMonthError(expirationDate.month) === '' && getYearError(expirationDate.year) === '';
  const isCvcCorrect = cvc.length === 3 && getCvcError(cvc) === '';
  const isPasswordCorrect = password.length === 2 && getPasswordError(password) === '';

  const isFormValid =
    isCardNumberCorrect &&
    isCardCompanyCorrect &&
    isExpirationDateCorrect &&
    isCvcCorrect &&
    isPasswordCorrect;

  let maxStep = 1;
  if (isCardNumberCorrect) maxStep = 2;
  if (maxStep === 2 && isCardCompanyCorrect) maxStep = 3;
  if (maxStep === 3 && isExpirationDateCorrect) maxStep = 4;
  if (maxStep === 4 && isCvcCorrect) maxStep = 5;

  return {
    formState: { cardNumber, cardCompany, expirationDate, cvc, password },
    setters: { setCardNumber, setCardCompany, setExpirationDate, setCvc, setPassword },
    validation: { isFormValid, maxStep },
  };
};
