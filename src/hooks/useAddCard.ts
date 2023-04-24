import { useEffect, useState } from 'react';
import {
  isCorrectCardNumber,
  isCorrectExpiredDate,
  isCorrectPassword,
  isCorrectSecurityCode,
} from '../validations/validationCardInfo';

const useAddCard = () => {
  const [cardNumbers, setCardNumbers] = useState<Array<string>>([
    '',
    '',
    '',
    '',
  ]);
  const [expiredDates, setExpiredDates] = useState<Array<string>>(['', '']);
  const [cardOwnerName, setCardOwnerName] = useState<string>('');
  const [securityCode, setSecurityCode] = useState<string>('');
  const [passwords, setPasswords] = useState<Array<string>>(['', '']);
  const [isDisabledForm, setIsDisabledForm] = useState(true);

  useEffect(() => {
    if (
      isCorrectCardNumber(cardNumbers) &&
      isCorrectExpiredDate(expiredDates) &&
      isCorrectSecurityCode(securityCode) &&
      isCorrectPassword(passwords)
    ) {
      setIsDisabledForm(false);
      return;
    }
    setIsDisabledForm(true);
  }, [cardNumbers, expiredDates, securityCode, passwords]);

  return {
    cardNumbers,
    setCardNumbers,
    expiredDates,
    setExpiredDates,
    cardOwnerName,
    setCardOwnerName,
    securityCode,
    setSecurityCode,
    passwords,
    setPasswords,
    isDisabledForm,
  };
};

export default useAddCard;
