import { useEffect, useState } from 'react';

const FORM_STEP_MATCH = {
  cardNumber: 0,
  brand: 1,
  expireDate: 2,
  cvc: 3,
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
    if (step === FORM_STEP_MATCH.cvc && canMoveNextFromCVC) {
      setStep(step + 1);
      return;
    }

    if (step === FORM_STEP_MATCH.expireDate && canMoveNextFromExpireDate) {
      setStep(step + 1);
      return;
    }

    if (step === FORM_STEP_MATCH.brand && selectedBrand) {
      setStep(step + 1);
      return;
    }

    if (step === FORM_STEP_MATCH.cardNumber && canMoveNextFromCardNumber) {
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
