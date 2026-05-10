import { useState } from 'react';
import { useCardForm } from '../useCardForm';
import {
  isCardBrandComplete,
  isCardNumberComplete,
  isCardPasswordComplete,
  isCvcComplete,
  isExpireDateComplete,
} from './validator';

export function useCardStep(cardForm: ReturnType<typeof useCardForm>) {
  const [step, setStep] = useState(0);

  const isAllComplete =
    isCardNumberComplete(cardForm.cardNumber.value) &&
    isCardBrandComplete(cardForm.cardBrand.value) &&
    isExpireDateComplete(cardForm.expireDate.value) &&
    isCvcComplete(cardForm.cvc.value) &&
    isCardPasswordComplete(cardForm.cardPassword.value);

  if (step === 0 && isCardNumberComplete(cardForm.cardNumber.value)) setStep(1);
  if (step === 1 && isCardBrandComplete(cardForm.cardBrand.value)) setStep(2);
  if (step === 2 && isExpireDateComplete(cardForm.expireDate.value)) setStep(3);
  if (step === 3 && isCvcComplete(cardForm.cvc.value)) setStep(4);
  if (step === 4 && isAllComplete) setStep(5);
  if (step === 5 && !isAllComplete) setStep(4);

  return step;
}
