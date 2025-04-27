import { useState } from 'react';
import { ExpirationPeriod, Position } from '../types/index.types';
import { INITIALIZE_VALUE } from '../constants/constant';

type ExpirationPeriodState = {
  [key in keyof ExpirationPeriod]: string;
};

export function useCardForm() {
  const [cardNumber, setCardNumber] = useState({
    first: INITIALIZE_VALUE,
    second: INITIALIZE_VALUE,
    third: INITIALIZE_VALUE,
    fourth: INITIALIZE_VALUE,
  });
  const [expirationPeriod, setExpirationPeriod] = useState<ExpirationPeriodState>({
    month: INITIALIZE_VALUE,
    year: INITIALIZE_VALUE,
  });
  const [CVCNumber, setCVCNumber] = useState(INITIALIZE_VALUE);
  const [password, setPassword] = useState(INITIALIZE_VALUE);
  const [cardColor, setCardColor] = useState('#333333');

  const changeCardNumber = (position: Position, number: string) => {
    setCardNumber((prev) => ({
      ...prev,
      [position]: number,
    }));
  };

  const changeExpirationPeriod = (expirationPeriod: keyof ExpirationPeriod, date: string) => {
    setExpirationPeriod((prev) => ({
      ...prev,
      [expirationPeriod]: date,
    }));
  };

  const changeCVCNumber = (CVCNumber: string) => {
    setCVCNumber(CVCNumber);
  };

  const changePassword = (password: string) => {
    setPassword(password);
  };

  return {
    cardNumber,
    expirationPeriod,
    CVCNumber,
    password,
    cardColor,
    changeCardNumber,
    changeExpirationPeriod,
    changeCVCNumber,
    changePassword,
    setCardColor,
  };
}
