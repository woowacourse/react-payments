import { useEffect, useState } from 'react';
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
  const [creationStage, setCreationStage] = useState(1);

  useEffect(() => {
    updateStage();
  }, [cardInfo, errorMessage, creationStage]);

  const isAllValidInput = () => {
    const isCardInfoValid = Object.values(cardInfo).every(
      (value) => value !== '',
    );
    const hasErrorMessage = Object.values(errorMessage).every((errors) =>
      errors.every((error: string) => error === ''),
    );
    return isCardInfoValid && hasErrorMessage;
  };

  const updateStage = () => {
    if (
      cardInfo.cardNumbers.every((element) => element.length === 4) &&
      errorMessage.cardNumbers.every((element) => element === '') &&
      creationStage < 2
    ) {
      setCreationStage(2);
    } else if (cardInfo.cardCompany !== '' && creationStage < 3) {
      setCreationStage(3);
    } else if (
      cardInfo.cardExpiration.every((element) => element.length == 2) &&
      errorMessage.cardExpiration.every((element) => element === '') &&
      creationStage < 4
    ) {
      setCreationStage(4);
    } else if (cardInfo.userName !== '' && creationStage < 5) {
      setCreationStage(5);
    } else if (cardInfo.cvc !== '' && creationStage < 6) {
      setCreationStage(6);
    } else if (cardInfo.password !== '' && creationStage < 7) {
      setCreationStage(7);
    }
  };

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
    creationStage,
    isAllValidInput,
    handleCardNumbers,
    handleCardCompany,
    handleCardExpiration,
    handleCardUserName,
    handleCardCVC,
    handleCardPassword,
  };
};

export default useCardForm;
