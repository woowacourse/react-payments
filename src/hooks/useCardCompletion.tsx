import { Dispatch, useState } from 'react';
import { FieldName } from '../config/inputField';

interface useCardCompletionProps {
  step: number;
  setStep: Dispatch<number>;
}

export function useCardCompletion({ step, setStep }: useCardCompletionProps) {
  const [isFieldComplete, setIsFieldComplete] = useState({
    cardNumber: false,
    expirationDate: false,
    CVC: false,
    password: false,
  });

  const markFieldComplete = ({
    isComplete,
    fieldName,
    targetStep,
  }: {
    isComplete: boolean;
    fieldName: FieldName;
    targetStep: number;
  }) => {
    if (isFieldComplete[fieldName] === isComplete) return;
    if (step === targetStep && isComplete) setStep(targetStep + 1);

    setIsFieldComplete((prev) => ({
      ...prev,
      [fieldName]: isComplete,
    }));
  };

  const isFormComplete = !Boolean(
    Object.values(isFieldComplete).filter((isComplete) => isComplete === false)
      .length
  );

  return { markFieldComplete, isFormComplete };
}
