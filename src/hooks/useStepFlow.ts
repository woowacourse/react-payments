import { useEffect } from 'react';
import { useFormContext } from '../contexts/useFormContext';
import { STEPS } from './../constants';

type StepName = (typeof STEPS)[number];

export function useStepFlow({ setStep }: { setStep: (step: StepName) => void }) {
  const { cardNumbers, expiration, company, cvc } = useFormContext();

  const isCardNumbersValid = Object.values(cardNumbers).every(({ value, isError }) => value.length === 4 && !isError);
  const isExpirationValid = Object.values(expiration).every(({ value, errorMessage }) => value.length === 2 && errorMessage === '');
  const isCompanyValid = company !== '';
  const isCvcValid = cvc.value.length === 3 && cvc.errorMessage === '';

  useEffect(() => {
    if (isCardNumbersValid) setStep('카드사');
  }, [isCardNumbersValid]);

  useEffect(() => {
    if (isCompanyValid) setStep('유효기간');
  }, [isCompanyValid]);

  useEffect(() => {
    if (isExpirationValid) setStep('CVC');
  }, [isExpirationValid]);

  useEffect(() => {
    if (isCvcValid) setStep('비밀번호');
  }, [isCvcValid]);
}
