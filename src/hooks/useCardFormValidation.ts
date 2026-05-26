import type { CardInfo } from '../types';
import type { FormValue } from './useAddCardForm';
import {
  validateCardNumbers,
  validateExpirationPeriod,
  validateCvc,
  validateCardCompany,
  validatePassword,
} from '../utils/validation';

type UseCardFormValidationParams = {
  formValue: FormValue;
  setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
  updateErrors: <K extends keyof FormValue>(key: K, errorStatuses: FormValue[K]['errorStatuses']) => void;
  cardNumbersTotalLength: number;
  cvcLength: number;
};

export default function useCardFormValidation({
  formValue,
  setFormValue,
  updateErrors,
  cardNumbersTotalLength,
  cvcLength,
}: UseCardFormValidationParams) {
  const cardNumbers = validateCardNumbers(cardNumbersTotalLength);
  const expirationPeriod = validateExpirationPeriod();
  const cvc = validateCvc(cvcLength);
  const cardCompany = validateCardCompany();
  const password = validatePassword();

  const validateCardNumbersOnComplete = (value: CardInfo['cardNumbers']) => {
    const { errorStatuses, isValid } = cardNumbers.validateOnComplete(value);
    updateErrors('cardNumbers', errorStatuses);
    return isValid;
  };

  const validateExpirationPeriodOnComplete = (value: CardInfo['expirationPeriod']) => {
    const { errorStatuses, isValid } = expirationPeriod.validateOnComplete(value);
    updateErrors('expirationPeriod', errorStatuses);
    return isValid;
  };

  const validateCvcOnComplete = (value: CardInfo['cvc']) => {
    const { errorStatuses, isValid } = cvc.validateOnComplete(value);
    updateErrors('cvc', errorStatuses);
    return isValid;
  };

  const validateCardCompanyOnComplete = (value: CardInfo['cardCompany']) => {
    const { errorStatuses, isValid } = cardCompany.validateOnComplete(value);
    updateErrors('cardCompany', errorStatuses);
    return isValid;
  };

  const validateAllFields = () => {
    const cardNumbersErrorStatuses = cardNumbers.runAllValidations(formValue.cardNumbers.value);
    const cardCompanyErrorStatuses = cardCompany.runAllValidations(formValue.cardCompany.value);
    const expirationPeriodErrorStatuses = expirationPeriod.runAllValidations(formValue.expirationPeriod.value);
    const cvcErrorStatuses = cvc.runAllValidations(formValue.cvc.value);
    const passwordErrorStatuses = password.runAllValidations(formValue.password.value);

    setFormValue((prev) => ({
      cardNumbers: { ...prev.cardNumbers, errorStatuses: cardNumbersErrorStatuses },
      cardCompany: { ...prev.cardCompany, errorStatuses: cardCompanyErrorStatuses },
      expirationPeriod: { ...prev.expirationPeriod, errorStatuses: expirationPeriodErrorStatuses },
      cvc: { ...prev.cvc, errorStatuses: cvcErrorStatuses },
      password: { ...prev.password, errorStatuses: passwordErrorStatuses },
    }));

    return [
      ...cardNumbersErrorStatuses,
      ...cardCompanyErrorStatuses,
      ...expirationPeriodErrorStatuses,
      ...cvcErrorStatuses,
      ...passwordErrorStatuses,
    ].every((errorStatus) => errorStatus === null);
  };

  return {
    rules: {
      cardNumbers: cardNumbers.rules,
      cardCompany: cardCompany.rules,
      expirationPeriod: expirationPeriod.rules,
      cvc: cvc.rules,
      password: password.rules,
    },
    validateCardNumbersOnComplete,
    validateExpirationPeriodOnComplete,
    validateCvcOnComplete,
    validateCardCompanyOnComplete,
    validateAllFields,
  };
}
