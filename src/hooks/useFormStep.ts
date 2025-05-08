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
    if (step === FORM_STEP_NUMBERS.cvc && canMoveNextFromCVC) {
      setStep(step + 1);
      return;
    }

    if (step === FORM_STEP_NUMBERS.expireDate && canMoveNextFromExpireDate) {
      setStep(step + 1);
      return;
    }

    if (step === FORM_STEP_NUMBERS.brand && selectedBrand) {
      setStep(step + 1);
      return;
    }

    if (step === FORM_STEP_NUMBERS.cardNumber && canMoveNextFromCardNumber) {
      setStep(step + 1);
      return;
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
