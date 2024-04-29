import { useState } from 'react';
import {
  CVC,
  ExpirationDate,
  Password,
  UserName,
} from '../types/card';
import useCardNumbers from './useCardNumbers';
import useCardBrand from './useCardBrand';

// 커스텀 훅 정의
export default function useCardForm({
  initCardNumber1 = '',
  initCardNumber2 = '',
  initCardNumber3 = '',
  initCardNumber4 = '',
  initExpirationDate = { month: '', year: '' },
  initUserName = '',
  initCardBrand = '',
  initCVC = '',
  initPassWord = '',
}) {
  const {cardNumbers, handleUpdateCardNumberInput, handleUpdateCardNumberErrorMessages} = useCardNumbers(initCardNumber1, initCardNumber2, initCardNumber3, initCardNumber4)
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>({
    expirationDateFields: {
      month: {
        value: initExpirationDate.month,
        errorMessage: '',
        isError: false,
      },
      year: {
        value: initExpirationDate.year,
        errorMessage: '',
        isError: false,
      },
    },
    isNextField: false,
  });
  const [userName, setUserName] = useState<UserName>({
    userNameField: {
      userName: { value: initUserName, errorMessage: '', isError: false },
    },
    isNextField: false,
  });

  const {cardBrand, handleUpdateCardBrand, handleUpdateCardBrandIsNextField} = useCardBrand(initCardBrand);


  const [CVC, setCVC] = useState<CVC>({
    CVCField: {
      CVC: { value: initCVC, errorMessage: '', isError: false },
    },
    isNextField: false,
  });

  const [password, setPassword] = useState<Password>({
    passwordField: {
      password: { value: initPassWord, errorMessage: '', isError: false },
    },
    isNextField: false,
  });

  return {
    cardNumbers,
    handleUpdateCardNumberInput,
    handleUpdateCardNumberErrorMessages,
    expirationDate,
    setExpirationDate,
    userName,
    setUserName,
    cardBrand, 
    handleUpdateCardBrand, 
    handleUpdateCardBrandIsNextField,
    CVC,
    setCVC,
    password,
    setPassword,
  };
}
