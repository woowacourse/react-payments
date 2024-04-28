import { useState } from 'react';
import { ICardInfo, IErrorMessage } from '../types/type';
import useCardNumbers from './useCardNumbers';

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

  const { handleCardNumbers } = useCardNumbers({
    cardNumbers: cardInfo.cardNumbers,
    errorMessageCardNumbers: errorMessage.cardNumbers,
    setCardInfo,
    setErrorMessage,
    focusNextInput,
  });

  return { cardInfo, errorMessage, handleCardNumbers };
};

export default useCardForm;
