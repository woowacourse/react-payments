import { useState } from 'react';
import { CardInputProps } from '../types/CardInputTypes';
import { ErrorMessagesType } from '../types/ErrorMessagesType';

export const useCardForm = () => {
  const [cardInput, setCardInput] = useState<CardInputProps>({
    first: null,
    second: null,
    third: null,
    fourth: null,
    MM: null,
    YY: null,
    CVC: null,
    secretNumber: null,
  });

  const [selectedCardBrand, setSelectedCardBrand] = useState<string>('');

  const [errorMessages, setErrorMessages] = useState<ErrorMessagesType>({
    first: '',
    second: '',
    third: '',
    fourth: '',
    MM: '',
    YY: '',
    CVC: '',
    cardBrand: '',
    secretNumber: '',
  });

  const handleErrorMessages = (
    key: keyof ErrorMessagesType,
    message: string,
  ) => {
    setErrorMessages(prev => ({
      ...prev,
      [key]: message,
    }));
  };

  return {
    cardInput,
    setCardInput,
    selectedCardBrand,
    setSelectedCardBrand,
    errorMessages,
    handleErrorMessages,
  };
};
