import { useState } from 'react';
import { ICardInfo, IErrorMessage } from '../types/type';
import useCardNumbers from './useCardNumbers';
import useCardCompany from './useCardCompany';
import useCardExpiration from './useCardExpiration';
import useCardUserName from './useCardUserName';
import useCardCVC from './useCardCVC';
import useCardPassword from './useCardPassword';

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

  const { handleCardExpiration } = useCardExpiration({
    cardExpiration: cardInfo.cardExpiration,
    errorMessageCardExpiration: errorMessage.cardExpiration,
    setCardInfo,
    setErrorMessage,
    focusNextInput,
  });

  const { handleCardUserName } = useCardUserName({
    setCardInfo,
    setErrorMessage,
  });

  const { handleCardCVC } = useCardCVC({
    setCardInfo,
    setErrorMessage,
  });

  const { handleCardPassword } = useCardPassword({
    setCardInfo,
    setErrorMessage,
  });

  return {
    cardInfo,
    errorMessage,
    handleCardNumbers,
    handleCardCompany,
    handleCardExpiration,
    handleCardUserName,
    handleCardCVC,
    handleCardPassword,
  };
};

export default useCardForm;
