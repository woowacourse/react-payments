import { useEffect, useState } from 'react';

import creditCardValidation from '@Domains/creditCard/creditCardValidation';

import * as Type from '@Types/index';

type Props = Partial<Pick<Type.CreditCard, 'number' | 'expiry' | 'owner' | 'cvc' | 'password' | 'company' | 'alias'>>;

const useCreditCardValidation = ({ number, expiry, owner, cvc, password, company, alias }: Props) => {
  const [isValid, setIsValid] = useState(false);

  const judgeValid = (value: string, fns: Record<string, (value: string) => { ok: boolean }>) =>
    Object.values(fns).every((fn) => {
      const { ok } = fn(value);
      if (ok) return false;
      return true;
    });

  useEffect(() => {
    if (!number) return;

    if (judgeValid(number, creditCardValidation.numberValidation)) setIsValid(true);
    else setIsValid(false);
  }, [number]);

  useEffect(() => {
    if (!expiry) return;

    if (judgeValid(expiry, creditCardValidation.expiryValidation)) setIsValid(true);
    else setIsValid(false);
  }, [expiry]);

  useEffect(() => {
    if (!owner) return;

    if (judgeValid(owner, creditCardValidation.ownerValidation)) setIsValid(true);
    else setIsValid(false);
  }, [owner]);

  useEffect(() => {
    if (!cvc) return;

    if (judgeValid(cvc, creditCardValidation.cvcValidation)) setIsValid(true);
    else setIsValid(false);
  }, [cvc]);

  useEffect(() => {
    if (!password) return;

    const result = Object.values(creditCardValidation.passwordValidation).some((fn) => {
      const { ok } = fn(password);
      if (ok) return true;
      return false;
    });

    if (result) setIsValid(true);
    else setIsValid(false);
  }, [password]);

  useEffect(() => {
    if (!company) setIsValid(false);
    else setIsValid(true);
  }, [company]);

  useEffect(() => {
    if (!alias) return;

    if (alias.length === 0) setIsValid(false);
    else if (alias.length > 10) setIsValid(false);
    else setIsValid(true);
  });

  return isValid;
};

export default useCreditCardValidation;
