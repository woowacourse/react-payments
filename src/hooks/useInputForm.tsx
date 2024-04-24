import { useEffect, useState } from 'react';
import CompleteValidation from '../domain/CompleteValidation';
import { Card, CardCompany } from '../types/card';

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
  const [step, setStep] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    console.log('step', step);

    if (step.every((value) => value === true)) {
      handleSubmit(true);
    } else {
      handleSubmit(false);
    }
  }, [step, handleSubmit]);

  const handleStep = (index: number, next: boolean = true) => {
    console.log('index', index);
    console.log('step forward', step);
    setStep((prev) => {
      const newStep = [...prev];
      newStep[index] = next;
      return newStep;
    });

    console.log('step behind', step);
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
    if (CompleteValidation['expiryDate']?.(value)) {
      handleStep(step.indexOf(false));
    }
  };

  const handleSelectCardCompany = (value: CardCompany) => {
    handleInput({
      ...cardInfo,
      cardCompany: value,
    });
    handleStep(step.indexOf(false));
  };

  const handleCardNumberInput = (
    step: number,
    value: Record<string, string>
  ) => {
    handleInput({
      ...cardInfo,
      cardNumbers: {
        ...cardInfo.cardNumbers,
        ...value,
      },
    });
    if (CompleteValidation['cardNumbers']?.(value)) {
      console.log('통과!', step);
      handleStep(step);
    } else {
      console.log('stop');
      handleStep(step, false);
    }
  };

  const handleNext = () => {
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
