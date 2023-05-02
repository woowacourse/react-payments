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
  const { cardNumbers, cardNumbersError, handleCardNumbers } = useCardNumbers();
  const { expiredDates, expiredDatesError, handleExpiredDates } =
    useExpiredDates();
  const { cardOwnerName, ownerNameError, handleCardOwnerName } = useOwnerName();
  const { securityCode, securityCodeError, handleSecurityCode } =
    useSecurityCode();
  const { passwords, isSetPasswords } = usePassword();
  const [cardCompany, setCardCompany] = useState<string>('');
  const [isDisabledForm, setIsDisabledForm] = useState(true);

  useEffect(() => {
    if (
      isCorrectCardNumber(cardNumbers) &&
      isCorrectExpiredDate(expiredDates) &&
      isCorrectSecurityCode(securityCode) &&
      isCorrectPassword(passwords) &&
      cardCompany
    ) {
      setIsDisabledForm(false);
      return;
    }
    setIsDisabledForm(true);
  }, [cardNumbers, expiredDates, securityCode, passwords, cardCompany]);

  return {
    cardNumbers,
    cardNumbersError,
    handleCardNumbers,
    expiredDates,
    expiredDatesError,
    handleExpiredDates,
    cardOwnerName,
    ownerNameError,
    handleCardOwnerName,
    securityCode,
    securityCodeError,
    handleSecurityCode,
    passwords,
    isSetPasswords,
    cardCompany,
    setCardCompany,
    isDisabledForm,
  };
};

export default useAddCard;
