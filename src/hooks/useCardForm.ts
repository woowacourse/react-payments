import { useState } from 'react';
import { ICardInfo, IErrorMessage } from '../types/type';
import useCardNumbers from './useCardNumbers';
import useCardCompany from './useCardCompany';

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

  const { handleCardCompany } = useCardCompany({
    setCardInfo,
    setErrorMessage,
  });

  return { cardInfo, errorMessage, handleCardNumbers, handleCardCompany };
};

export default useCardForm;
