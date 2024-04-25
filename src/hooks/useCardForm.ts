import { useState } from 'react';
import { CardNumbers, CVC, ExpirationDate, UserName } from '../types/card';

// 커스텀 훅 정의
export default function useCardForm({initCardNumber1 = '', initCardNumber2 = '', initCardNumber3 = '', initCardNumber4 = '', initExpirationDate = { month: '', year: ''}, initUserName = '', initCardBrand = '', initCVC = ''}) {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>({
    cardNumber1: {value : initCardNumber1, errorMessage: '', isError : false},
    cardNumber2: {value : initCardNumber2, errorMessage: '', isError : false},
    cardNumber3: {value : initCardNumber3, errorMessage: '', isError : false},
    cardNumber4: {value : initCardNumber4, errorMessage: '', isError : false},
    // isAllError: false
  });
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>({
    month : {value : initExpirationDate.month, errorMessage : '', isError : false},
    year : {value : initExpirationDate.year, errorMessage : '', isError : false},
  });
  const [userName, setUserName] = useState<UserName>({
    userName : {value: initUserName , errorMessage: '', isError: false}
  });

  const [cardBrand, setCardBrand] = useState({
    cardBrand : {value: initCardBrand , errorMessage: '', isError: false}
  });

  const [CVC, setCVC] = useState<CVC>({
    CVC : {value: initCVC , errorMessage: '', isError: false}
  });

  return {
    cardNumbers,
    setCardNumbers,
    expirationDate,
    setExpirationDate,
    userName,
    setUserName,
    cardBrand,
    setCardBrand,
    CVC,
    setCVC
  };
}
