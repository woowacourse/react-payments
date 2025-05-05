import { useEffect } from 'react';
import { STEPS } from './../constants';
import { CardCompanyType, CardNumberType, CvcType, ExpirationType } from '../types';
import { validateCardNumbers, validateCompany, validateCvc, validateExpiration } from '../validation/validator';

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
  company: CardCompanyType | null;
  cvc: CvcType;
}) {
  const isCardNumberValid = validateCardNumbers(cardNumbers);
  const isCompanyValid = validateCompany(company);
  const isExpirationValid = validateExpiration(expiration);
  const isCvcValid = validateCvc(cvc);

  useEffect(() => {
    if (isCardNumberValid) setStep('카드사');
  }, [isCardNumberValid]);

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
