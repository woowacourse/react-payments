import { useEffect, useState } from 'react';
import { Card, CardCompany } from '../types/card';
import { DEFAULT_CARD_BOOLEAN } from '../constants/card';

interface InputFormProps {
  cardInfo: Card;
  handleInput: (value: Card) => void;
  handleSubmit: (value: boolean) => void;
}

const useInputForm = ({
  cardInfo,
  handleInput,
  handleSubmit,
}: InputFormProps) => {
  const [complete, setComplete] =
    useState<Record<string, boolean>>(DEFAULT_CARD_BOOLEAN);

  useEffect(() => {
    if (Object.values(complete).every((value) => value === true)) {
      handleSubmit(true);
    } else {
      handleSubmit(false);
    }
  }, [complete]);

  const handleComplete = (str: string, isComplete: boolean) => {
    setComplete((prev) => {
      return {
        ...prev,
        [str]: isComplete,
      };
    });
  };

  const handleOneValue = (value: Record<string, string>) => {
    handleInput({
      ...cardInfo,
      ...value,
    });
  };

  const handleExpiryDateInput = (value: Record<string, string>) => {
    handleInput({
      ...cardInfo,
      expiryDate: {
        ...cardInfo.expiryDate,
        ...value,
      },
    });
  };

  const handleSelectCardCompany = (value: CardCompany) => {
    handleInput({
      ...cardInfo,
      cardCompany: value,
    });
  };

  const handleCardNumberInput = (value: Record<string, string>) => {
    handleInput({
      ...cardInfo,
      cardNumbers: {
        ...cardInfo.cardNumbers,
        ...value,
      },
    });
  };

  return {
    handleOneValue,
    handleExpiryDateInput,
    handleSelectCardCompany,
    handleCardNumberInput,
    handleComplete,
  };
};

export default useInputForm;
