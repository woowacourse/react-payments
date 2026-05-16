import type { CardInfo } from '../types';
import type { FormValue } from './useAddCardForm';
import useCardNumbersValidation from './validation/useCardNumbersValidation';
import useExpirationPeriodValidation from './validation/useExpirationPeriodValidation';
import useCvcValidation from './validation/useCvcValidation';
import useCardCompanyValidation from './validation/useCardCompanyValidation';
import usePasswordValidation from './validation/usePasswordValidation';

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
  const cardNumbers = useCardNumbersValidation(cardNumbersTotalLength);
  const expirationPeriod = useExpirationPeriodValidation();
  const cvc = useCvcValidation(cvcLength);
  const cardCompany = useCardCompanyValidation();
  const password = usePasswordValidation();

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
    const cardNumbersErrorStatuses = cardNumbers.getErrorStatuses(formValue.cardNumbers.value);
    const cardCompanyErrorStatuses = cardCompany.getErrorStatuses(formValue.cardCompany.value);
    const expirationPeriodErrorStatuses = expirationPeriod.getErrorStatuses(formValue.expirationPeriod.value);
    const cvcErrorStatuses = cvc.getErrorStatuses(formValue.cvc.value);
    const passwordErrorStatuses = password.getErrorStatuses(formValue.password.value);

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
