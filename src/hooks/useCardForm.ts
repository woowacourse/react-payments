import { useEffect, useState } from 'react';
import { ICardInfo, IErrorMessage } from '../types/type';
import useCardNumbers from './useCardNumbers';
import useCardCompany from './useCardCompany';
import useCardExpiration from './useCardExpiration';
import useCardUserName from './useCardUserName';
import useCardCVC from './useCardCVC';
import useCardPassword from './useCardPassword';
import { CREATION_STAGE } from '../constants/setting';

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
    const isValidCardNumbers = cardInfo.cardNumbers.every(
      (element) => element.length === 4,
    );
    const isErroMessageEmpty = errorMessage.cardNumbers.every(
      (element) => element === '',
    );
    const isValidExpiration = cardInfo.cardExpiration.every(
      (element) => element.length == 2,
    );
    const isVarExpirationErrorMessagesEmpty = errorMessage.cardExpiration.every(
      (element) => element === '',
    );

    if (
      isValidCardNumbers &&
      isErroMessageEmpty &&
      creationStage < CREATION_STAGE.CARD_NUMBERS
    ) {
      setCreationStage(CREATION_STAGE.CARD_NUMBERS);
    } else if (
      cardInfo.cardCompany !== '' &&
      creationStage < CREATION_STAGE.CARD_COMPANY
    ) {
      setCreationStage(CREATION_STAGE.CARD_COMPANY);
    } else if (
      isValidExpiration &&
      isVarExpirationErrorMessagesEmpty &&
      creationStage < CREATION_STAGE.CARD_EXPIRATION
    ) {
      setCreationStage(CREATION_STAGE.CARD_EXPIRATION);
    } else if (
      cardInfo.userName !== '' &&
      creationStage < CREATION_STAGE.CARD_USERNAME
    ) {
      setCreationStage(CREATION_STAGE.CARD_USERNAME);
    } else if (cardInfo.cvc !== '' && creationStage < CREATION_STAGE.CARD_CVC) {
      setCreationStage(CREATION_STAGE.CARD_CVC);
    } else if (
      cardInfo.password !== '' &&
      creationStage < CREATION_STAGE.CARD_PASSWORD
    ) {
      setCreationStage(CREATION_STAGE.CARD_PASSWORD);
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
