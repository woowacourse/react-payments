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

const useAddCard = () => {
  const [securityCode, setSecurityCode] = useState<string>('');
  const [passwords, setPasswords] = useState<Array<string>>(['', '']);
  const [cardCompany, setCardCompany] = useState<string>('');
  const [isDisabledForm, setIsDisabledForm] = useState(true);

  const { cardNumbers, isSetCardNumbers } = useCardNumbers();
  const { expiredDates, isSetExpiredDates } = useExpiredDates();
  const { ownerName, isSetOwnerName } = useOwnerName();

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
    ownerName,
    isSetOwnerName,
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
