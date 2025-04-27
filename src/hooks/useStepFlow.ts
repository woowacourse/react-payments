import { CardFormProps } from '../contexts/useFormContext';
import { STEPS } from './../constants';
import { useEffect } from 'react';

type StepName = (typeof STEPS)[number];

export function useStepFlow({ formState, setStep }: { formState: CardFormProps; setStep: (step: StepName) => void }) {
  const { cardNumbers, expiration, company, cvc } = formState;

  const isCardNumbersValid = Object.values(cardNumbers).every(({ value, isError }) => value.length === 4 && !isError);
  const isExpirationValid = Object.values(expiration).every(({ value, errorMessage }) => value.length === 2 && errorMessage === '');
  const isCompanyValid = company !== '';
  const isCvcValid = cvc.value.length === 3 && cvc.errorMessage === '';

  useEffect(() => {
    if (isCardNumbersValid) setStep('카드사');
  }, [isCardNumbersValid]);

  useEffect(() => {
    if (isExpirationValid) setStep('CVC');
  }, [isExpirationValid]);

  useEffect(() => {
    if (isCompanyValid) setStep('유효기간');
  }, [isCompanyValid]);

  useEffect(() => {
    if (isCvcValid) setStep('비밀번호');
  }, [isCvcValid]);
}
