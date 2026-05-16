import { PASSWORD_LENGTH, PERIOD_LENGTH_PER_INPUT, RULES } from '../constants';
import type { CardInfo, ExpirationPeriodErrorStatus, ExpirationValidationRule } from '../types';
import { validate, validateAll } from '../utils';
import type { FormValue } from './useAddCardForm';

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
  const cardNumbersRules = [RULES.numberOnly, RULES.required, RULES.exactLengthOnComplete(cardNumbersTotalLength)];
  const expirationPeriodRules: [ExpirationValidationRule[], ExpirationValidationRule[]] = [
    [RULES.numberOnly, RULES.required, RULES.exactLength(PERIOD_LENGTH_PER_INPUT), RULES.validMonth],
    [
      RULES.numberOnly,
      RULES.required,
      RULES.exactLength(PERIOD_LENGTH_PER_INPUT),
      RULES.validYear,
      RULES.validMonthAndYear,
    ],
  ];
  const cvcRules = [RULES.numberOnly, RULES.required, RULES.exactLengthOnComplete(cvcLength)];
  const cardCompanyRules = [RULES.required];
  const passwordRules = [RULES.numberOnly, RULES.required, RULES.exactLength(PASSWORD_LENGTH)];

  const validateCardNumbersOnComplete = (value: CardInfo['cardNumbers']) => {
    const totalError = validate(cardNumbersRules, 'onComplete', value.join(''));
    updateErrors('cardNumbers', [null, null, null, null, totalError as FormValue['cardNumbers']['errorStatuses'][4]]);
    return totalError === null;
  };

  const validateExpirationPeriodOnComplete = (value: CardInfo['expirationPeriod']) => {
    const totalError = validate(
      expirationPeriodRules[1],
      'onComplete',
      value.join(''),
    ) as FormValue['expirationPeriod']['errorStatuses'][2];
    updateErrors('expirationPeriod', [null, null, totalError]);
    return totalError === null;
  };

  const validateCvcOnComplete = (value: CardInfo['cvc']) => {
    const errorStatus = validate(cvcRules, 'onComplete', value) as FormValue['cvc']['errorStatuses'][0];
    updateErrors('cvc', [errorStatus]);
    return errorStatus === null;
  };

  const validateCardCompanyOnComplete = (value: CardInfo['cardCompany']) => {
    const errorStatus = validate(cardCompanyRules, 'onComplete', value) as FormValue['cardCompany']['errorStatuses'][0];
    updateErrors('cardCompany', [errorStatus]);
    return errorStatus === null;
  };

  const validateAllFields = () => {
    const cardNumbersErrorStatuses = getCardNumbersErrorStatuses(formValue.cardNumbers.value);
    const cardCompanyErrorStatuses = getCardCompanyErrorStatuses(formValue.cardCompany.value);
    const expirationPeriodErrorStatuses = getExpirationPeriodErrorStatuses(formValue.expirationPeriod.value);
    const cvcErrorStatuses = getCvcErrorStatuses(formValue.cvc.value);
    const passwordErrorStatuses = getPasswordErrorStatuses(formValue.password.value);

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

  function getCardNumbersErrorStatuses(value: CardInfo['cardNumbers']): FormValue['cardNumbers']['errorStatuses'] {
    return [
      ...value.map((fieldValue) => validateAll([RULES.numberOnly, RULES.required], fieldValue)),
      validateAll(cardNumbersRules, value.join('')),
    ] as FormValue['cardNumbers']['errorStatuses'];
  }

  function getCardCompanyErrorStatuses(value: CardInfo['cardCompany']): FormValue['cardCompany']['errorStatuses'] {
    return [validateAll(cardCompanyRules, value)] as FormValue['cardCompany']['errorStatuses'];
  }

  function getExpirationPeriodErrorStatuses(
    value: CardInfo['expirationPeriod'],
  ): FormValue['expirationPeriod']['errorStatuses'] {
    const monthError = validate(
      expirationPeriodRules[0],
      'onBlur',
      value[0],
    ) as FormValue['expirationPeriod']['errorStatuses'][0];
    const yearError = validate(
      expirationPeriodRules[1],
      'onBlur',
      value[1],
    ) as FormValue['expirationPeriod']['errorStatuses'][1];
    const hasIndividualError = monthError !== null || yearError !== null;
    const totalError = hasIndividualError
      ? null
      : (validate(
          expirationPeriodRules[1],
          'onComplete',
          value.join(''),
        ) as FormValue['expirationPeriod']['errorStatuses'][2]);
    return [monthError, yearError, totalError];
  }

  function getCvcErrorStatuses(value: CardInfo['cvc']): FormValue['cvc']['errorStatuses'] {
    return [validateAll(cvcRules, value)] as FormValue['cvc']['errorStatuses'];
  }

  function getPasswordErrorStatuses(value: CardInfo['password']): FormValue['password']['errorStatuses'] {
    return [validateAll(passwordRules, value)] as FormValue['password']['errorStatuses'];
  }

  return {
    rules: {
      cardNumbers: cardNumbersRules,
      cardCompany: cardCompanyRules,
      expirationPeriod: expirationPeriodRules,
      cvc: cvcRules,
      password: passwordRules,
    },
    validateCardNumbersOnComplete,
    validateExpirationPeriodOnComplete,
    validateCvcOnComplete,
    validateCardCompanyOnComplete,
    validateAllFields,
  };
}
