import { useEffect, useState } from 'react';

export const FORM_STEP_NUMBERS = {
  cardNumber: 0,
  brand: 1,
  expireDate: 2,
  cvc: 3,
  password: 4,
};

type UseFormStepProps = {
  canMoveNextFromCardNumber: boolean;
  canMoveNextFromCVC: boolean;
  canMoveNextFromExpireDate: boolean;
  selectedBrand: string | null;
  canMoveNextFromPassword: boolean;
};

export const useFormStep = ({
  canMoveNextFromCardNumber,
  canMoveNextFromCVC,
  canMoveNextFromExpireDate,
  selectedBrand,
  canMoveNextFromPassword,
}: UseFormStepProps) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const stepCompletes = [
      { stepNumber: FORM_STEP_NUMBERS.cvc, isCompleted: canMoveNextFromCVC },
      { stepNumber: FORM_STEP_NUMBERS.expireDate, isCompleted: canMoveNextFromExpireDate },
      { stepNumber: FORM_STEP_NUMBERS.brand, isCompleted: selectedBrand },
      { stepNumber: FORM_STEP_NUMBERS.cardNumber, isCompleted: canMoveNextFromCardNumber },
      { stepNumber: FORM_STEP_NUMBERS.password, isCompleted: canMoveNextFromPassword },
    ];

    const currentStep = stepCompletes.find((stepComplete) => stepComplete.stepNumber === step);

    if (!currentStep) return;

    if (currentStep.isCompleted) {
      setStep(step + 1);
    }
  }, [
    canMoveNextFromCardNumber,
    canMoveNextFromCVC,
    canMoveNextFromExpireDate,
    selectedBrand,
    canMoveNextFromPassword,
  ]);

  return { step };
};
