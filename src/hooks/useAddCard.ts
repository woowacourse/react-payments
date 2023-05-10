import { useEffect, useState } from 'react';
import {
  isCorrectCardNumber,
  isCorrectExpiredDate,
  isCorrectPassword,
  isCorrectSecurityCode,
} from '../validations/validationCardInfo';
import useCardNumbers from './useCardNumbers';
import useExpiredDates from './useExpiredDates';
import useOwnerName from './useOwnerName';
import useSecurityCode from './useSecurityCode';
import usePassword from './usePassword';

const useAddCard = () => {
  const { cardNumbers, cardNumbersError, isValidatedCardNumbers } =
    useCardNumbers();
  const { expiredDates, expiredDatesError, isValidatedExpiredDates } =
    useExpiredDates();
  const { cardOwnerName, ownerNameError, isValidatedCardOwnerName } =
    useOwnerName();
  const { securityCode, securityCodeError, isValidatedSecurityCode } =
    useSecurityCode();
  const { cardPasswords, passwordError, isValidatedCardPasswords } =
    usePassword();
  const [cardCompany, setCardCompany] = useState<string>('');
  const [isDisabledForm, setIsDisabledForm] = useState(true);

  useEffect(() => {
    if (
      isCorrectCardNumber(cardNumbers) &&
      isCorrectExpiredDate(expiredDates) &&
      isCorrectSecurityCode(securityCode) &&
      isCorrectPassword(cardPasswords) &&
      cardCompany
    ) {
      setIsDisabledForm(false);
      return;
    }
    setIsDisabledForm(true);
  }, [cardNumbers, expiredDates, securityCode, cardPasswords, cardCompany]);

  return {
    cardNumbers,
    cardNumbersError,
    isValidatedCardNumbers,
    expiredDates,
    expiredDatesError,
    isValidatedExpiredDates,
    cardOwnerName,
    ownerNameError,
    isValidatedCardOwnerName,
    securityCode,
    securityCodeError,
    isValidatedSecurityCode,
    cardPasswords,
    passwordError,
    isValidatedCardPasswords,
    cardCompany,
    setCardCompany,
    isDisabledForm,
  };
};

export default useAddCard;
