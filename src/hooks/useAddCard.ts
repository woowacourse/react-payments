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

const useAddCard = () => {
  const [passwords, setPasswords] = useState<Array<string>>(['', '']);
  const [cardCompany, setCardCompany] = useState<string>('');
  const [isDisabledForm, setIsDisabledForm] = useState(true);

  const { cardNumbers, isSetCardNumbers } = useCardNumbers();
  const { expiredDates, isSetExpiredDates } = useExpiredDates();
  const { ownerName, isSetOwnerName } = useOwnerName();
  const { securityCode, isSetSecurityCode } = useSecurityCode();

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
    isSetSecurityCode,
    passwords,
    setPasswords,
    cardCompany,
    setCardCompany,
    isDisabledForm,
  };
};

export default useAddCard;
