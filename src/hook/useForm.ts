import { useState } from 'react';
import type { CardInputProps } from '../types/CardInputTypes';
import useErrorMessages from './useErrorMessages';
import {
  getCardNumberErrorMessage,
  getCardExpirationMMErrorMessage,
  getCardExpirationYYErrorMessage,
  getCardCVCErrorMessage,
  getCardPasswordErrorMessage,
} from '../validation/getCardErrorMessages';

const useForm = () => {
  const [cardInput, setCardInput] = useState<CardInputProps>({
    first: '',
    second: '',
    third: '',
    fourth: '',
    MM: '',
    YY: '',
    CVC: '',
    password: '',
    cardBrand: '',
  });

  const { errorMessages, handleErrorMessages } = useErrorMessages();

  const handleCardInput = (inputKey: keyof CardInputProps, value: string) => {
    if (!validateCardInputs(inputKey, value)) {
      return;
    }

    handleErrorMessages(inputKey, '');

    setCardInput((prev: CardInputProps) => ({
      ...prev,
      [inputKey]: value,
    }));
  };

  const validateCardInputs = (inputKey: keyof CardInputProps, value: string) => {
    if (inputKey === 'cardBrand') {
      return true;
    }

    const errorMessage = matchingErrorMessageFunc[inputKey](value);
    if (errorMessage && errorMessage.length > 0) {
      handleErrorMessages(inputKey, errorMessage);

      return false;
    }

    return true;
  };

  const matchingErrorMessageFunc = {
    first: getCardNumberErrorMessage,
    second: getCardNumberErrorMessage,
    third: getCardNumberErrorMessage,
    fourth: getCardNumberErrorMessage,
    MM: getCardExpirationMMErrorMessage,
    YY: getCardExpirationYYErrorMessage,
    CVC: getCardCVCErrorMessage,
    password: getCardPasswordErrorMessage,
  };

  return { cardInput, handleCardInput, errorMessages };
};

export default useForm;
