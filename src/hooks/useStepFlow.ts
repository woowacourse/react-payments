import { useEffect } from 'react';

import { STEPS } from './../constants';
import { CardNumberType, CvcType, ExpirationType } from '../types';

type StepName = (typeof STEPS)[number];

export function useStepFlow({
  setStep,
  cardNumbers,
  expiration,
  company,
  cvc
}: {
  setStep: (step: StepName) => void;
  cardNumbers: CardNumberType;
  expiration: ExpirationType;
  company: string;
  cvc: CvcType;
}) {
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
