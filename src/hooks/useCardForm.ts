import { useState } from 'react';
import { ICardInfo, IErrorMessage } from '../types/type';

const useCardForm = () => {
  const [cardInfo, setCardInfo] = useState<ICardInfo>({
    cardNumbers: ['', '', '', ''],
    cardCompany: '',
    cardExpiration: ['', ''],
    userName: '',
    cvc: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<IErrorMessage>({
    cardNumbers: ['', '', '', ''],
    cardCompany: [''],
    cardExpiration: ['', ''],
    userName: [''],
    cvc: [''],
    password: [''],
  });

  const focusNextInput = (currentInput: HTMLInputElement) => {
    const nextInput = currentInput.nextSibling as HTMLInputElement | null;
    if (nextInput && nextInput instanceof HTMLInputElement) {
      nextInput.focus();
    }
  };
};

export default useCardForm;
