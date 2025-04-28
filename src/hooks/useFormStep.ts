import { useEffect, useState } from 'react';

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
    if (step === 3 && canMoveNextFromCVC) {
      setStep(step + 1);
      return;
    }

    if (step === 2 && canMoveNextFromExpireDate) {
      setStep(step + 1);
      return;
    }

    if (step === 1 && selectedBrand) {
      setStep(step + 1);
      return;
    }

    if (step === 0 && canMoveNextFromCardNumber) {
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
