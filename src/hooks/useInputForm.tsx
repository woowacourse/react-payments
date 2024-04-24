import { useState } from 'react';
import CompleteValidation from '../domain/CompleteValidation';
import { Card, CardCompany } from '../types/card';
// import debounceFunc from '../utils/debounceFunc';

interface InputFormProps {
  cardInfo: Card;
  handleInput: (value: Card) => void;
}

const useInputForm = ({ cardInfo, handleInput }: InputFormProps) => {
  const [step, setStep] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleStep = (index: number) => {
    setStep((prev) => {
      const newStep = [...prev];
      newStep[index] = true;
      return newStep;
    });
  };

  const handleOneValue = (value: Record<string, string>) => {
    handleInput({
      ...cardInfo,
      ...value,
    });

    console.log('handleOneValue', value);
    // debounceFunc(() => handleStep(step.indexOf(false)));
    // if (keydown === 'Enter') {
    //   handleStep(step.indexOf(false));
    // }
  };

  const handleExpiryDateInput = (value: Record<string, string>) => {
    handleInput({
      ...cardInfo,
      expiryDate: {
        ...cardInfo.expiryDate,
        ...value,
      },
    });
    if (CompleteValidation['expiryDate']?.(value)) {
      handleStep(2);
    }
  };

  const handleSelectCardCompany = (value: CardCompany) => {
    handleInput({
      ...cardInfo,
      cardCompany: value,
    });
    handleStep(1);
  };

  const handleCardNumberInput = (value: Record<string, string>) => {
    handleInput({
      ...cardInfo,
      cardNumbers: {
        ...cardInfo.cardNumbers,
        ...value,
      },
    });
    if (CompleteValidation['cardNumbers']?.(value)) {
      handleStep(0);
    }
  };

  const handleNext = () => {
    console.log('handleNext');
    handleStep(step.indexOf(false));
  };

  return {
    step,
    handleOneValue,
    handleExpiryDateInput,
    handleSelectCardCompany,
    handleCardNumberInput,
    handleNext,
  };
};

export default useInputForm;
