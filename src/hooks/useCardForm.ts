import { useState } from 'react';
import { CardNumbers, ExpirationDate } from '../types/card';

// 커스텀 훅 정의
export default function useCardForm({initCardNumber1 = '', initCardNumber2 = '', initCardNumber3 = '', initCardNumber4 = '', initExpirationDate = { month: '', year: ''}, initUserName = ''}) {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>({
    cardNumber1: initCardNumber1,
    cardNumber2: initCardNumber2,
    cardNumber3: initCardNumber3,
    cardNumber4: initCardNumber4,
  });
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>({
    ...initExpirationDate
  });
  const [userName, setUserName] = useState<string>(initUserName);

  return {
    cardNumbers,
    setCardNumbers,
    expirationDate,
    setExpirationDate,
    userName,
    setUserName,
  };
}
