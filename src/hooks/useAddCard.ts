import { useEffect, useState } from 'react';

const useAddCard = () => {
  const [cardNumbers, setCardNumbers] = useState<Record<number, string>>({
    0: '',
    1: '',
    2: '',
    3: '',
  });
  const [expiredDate, setExpiredDate] = useState<Record<number, string>>({
    0: '',
    1: '',
  });
  const [cardOwnerName, setCardOwnerName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState<Record<number, string>>({
    0: '',
    1: '',
  });
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const { 0: expiredMonth, 1: expiredYear } = expiredDate;
    const { 0: first, 1: second, 2: third, 3: fourth } = cardNumbers;
    const { 0: firstPassword, 1: secondPassword } = password;
    if (
      first.length !== 4 ||
      second.length !== 4 ||
      third.length !== 4 ||
      fourth.length !== 4 ||
      expiredMonth.length !== 2 ||
      expiredYear.length !== 2 ||
      securityCode.length !== 3 ||
      !firstPassword ||
      !secondPassword
    ) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  }, [expiredDate, cardNumbers, securityCode, password]);

  return {
    cardNumbers,
    setCardNumbers,
    expiredDate,
    setExpiredDate,
    cardOwnerName,
    setCardOwnerName,
    securityCode,
    setSecurityCode,
    password,
    setPassword,
    disabled,
  };
};

export default useAddCard;
