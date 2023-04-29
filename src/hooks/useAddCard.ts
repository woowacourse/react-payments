import { useEffect, useState } from 'react';
import {
  isCorrectCardNumber,
  isCorrectExpiredDate,
  isCorrectPassword,
  isCorrectSecurityCode,
} from '../validations/validationCardInfo';
import useCardNumbers from './useCardNumbers';
import useExpiredDates from './useExpiredDates';

const useAddCard = () => {
  // const [expiredDates, setExpiredDates] = useState<Array<string>>(['', '']);
  const [cardOwnerName, setCardOwnerName] = useState<string>('');
  const [securityCode, setSecurityCode] = useState<string>('');
  const [passwords, setPasswords] = useState<Array<string>>(['', '']);
  const [cardCompany, setCardCompany] = useState<string>('');
  const [isDisabledForm, setIsDisabledForm] = useState(true);

  const { cardNumbers, isSetCardNumbers } = useCardNumbers();
  const { expiredDates, isSetExpiredDates } = useExpiredDates();

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
    isSetCardNumbers,
    expiredDates,
    isSetExpiredDates,
    cardOwnerName,
    setCardOwnerName,
    securityCode,
    setSecurityCode,
    passwords,
    setPasswords,
    cardCompany,
    setCardCompany,
    isDisabledForm,
  };
};

export default useAddCard;
