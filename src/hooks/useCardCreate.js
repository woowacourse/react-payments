import { useRef } from 'react';
import { useFormCompany } from './useFormCompany';
import { useFormNumber } from './useFormNumber';
import { useFormValidDay } from './useFormValidDay';
import { useFormOwner } from './useFormOwner';
import { useFormCvc } from './useFormCvc';
import { useFormPassword } from './useFormPassword';

export const useCardCreate = () => {
  const formRef = useRef();
  const { company } = useFormCompany();
  const { numbers } = useFormNumber(formRef);
  const { validDay } = useFormValidDay(formRef);
  const { owner } = useFormOwner();
  const { cvc } = useFormCvc();
  const { password } = useFormPassword(formRef);

  const hasSubmittedEveryInput = () => {
    return (
      company.value &&
      Object.values(numbers.value).every((value) => value) &&
      Object.values(validDay.value).every((value) => value) &&
      cvc.value &&
      Object.values(password.value).every((value) => value)
    );
  };

  const isValidEveryInput = () => {
    return (
      company.isValid &&
      Object.values(numbers.isValid).every((value) => value) &&
      Object.values(validDay.isValid).every((value) => value) &&
      cvc.isValid &&
      Object.values(password.isValid).every((value) => value)
    );
  };

  return {
    formRef,
    company,
    numbers,
    validDay,
    owner,
    cvc,
    password,
    isValidEveryInput,
    hasSubmittedEveryInput,
  };
};
