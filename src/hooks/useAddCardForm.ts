import { useState } from 'react';
import {
  CARD_COMPANY_OPTIONS,
  CARD_CVC_MAX_LENGTH,
  CARD_TOTAL_LENGTH,
  DEFAULT_CARD_TOTAL_LENGTH,
  DEFAULT_CVC_LENGTH,
  PASSWORD_LENGTH,
  PERIOD_LENGTH_PER_INPUT,
  RULES,
} from '../constants';
import type { CardBrand, CardInfo, ErrorStatus, ExpirationPeriodErrorStatus, ExpirationValidationRule } from '../types';
import { categorizeCardBrand, validate, validateAll } from '../utils';

interface FieldState<V, E extends (ErrorStatus | ExpirationPeriodErrorStatus)[] = [ErrorStatus]> {
  value: V;
  errorStatuses: E;
}

export interface FormValue {
  cardNumbers: FieldState<CardInfo['cardNumbers'], [ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus]>;
  cardCompany: FieldState<CardInfo['cardCompany']>;
  expirationPeriod: FieldState<
    CardInfo['expirationPeriod'],
    [ExpirationPeriodErrorStatus, ExpirationPeriodErrorStatus]
  >;
  cvc: FieldState<CardInfo['cvc']>;
  password: FieldState<CardInfo['password']>;
}

export type AddCardFormFieldKey = keyof FormValue;

export const createInitialFormValue = (): FormValue => ({
  cardNumbers: { value: ['', '', '', ''], errorStatuses: [null, null, null, null, null] },
  cardCompany: { value: '', errorStatuses: [null] },
  expirationPeriod: { value: ['', ''], errorStatuses: [null, null] },
  cvc: { value: '', errorStatuses: [null] },
  password: { value: '', errorStatuses: [null] },
});

type CompletePageState = {
  firstFourDigits: string;
  cardCompany: string;
};

export default function useAddCardForm() {
  const [formValue, setFormValue] = useState<FormValue>(createInitialFormValue);

  const cardBrand = categorizeCardBrand(formValue.cardNumbers.value);
  const cvcLength = CARD_CVC_MAX_LENGTH[cardBrand] ?? DEFAULT_CVC_LENGTH;
  const cardNumbersTotalLength = CARD_TOTAL_LENGTH[cardBrand] ?? DEFAULT_CARD_TOTAL_LENGTH;

  const cardNumbersRules = [RULES.numberOnly, RULES.required, RULES.exactLength(cardNumbersTotalLength)];
  const expirationPeriodRules: [ExpirationValidationRule[], ExpirationValidationRule[]] = [
    [RULES.numberOnly, RULES.required, RULES.exactLength(PERIOD_LENGTH_PER_INPUT), RULES.validMonth],
    [RULES.numberOnly, RULES.required, RULES.exactLength(PERIOD_LENGTH_PER_INPUT), RULES.validYear],
  ];
  const cvcRules = [RULES.numberOnly, RULES.required, RULES.exactLength(cvcLength)];
  const cardCompanyRules = [RULES.required];
  const passwordRules = [RULES.numberOnly, RULES.required, RULES.exactLength(PASSWORD_LENGTH)];

  const updateValue = <K extends keyof FormValue>(key: K, value: FormValue[K]['value']) => {
    setFormValue((prev) => ({
      ...prev,
      [key]: { ...prev[key], value },
    }));
  };

  const updateErrors = <K extends keyof FormValue>(key: K, errorStatuses: FormValue[K]['errorStatuses']) => {
    setFormValue((prev) => ({
      ...prev,
      [key]: { ...prev[key], errorStatuses },
    }));
  };

  const validateCardNumbersOnComplete = (value: CardInfo['cardNumbers']) => {
    const totalError = validate([RULES.exactLength(cardNumbersTotalLength)], 'onBlur', value.join(''));

    setFormValue((prev) => ({
      ...prev,
      cardNumbers: {
        ...prev.cardNumbers,
        errorStatuses: [
          ...prev.cardNumbers.errorStatuses.slice(0, 4),
          totalError as FormValue['cardNumbers']['errorStatuses'][4],
        ] as FormValue['cardNumbers']['errorStatuses'],
      },
    }));

    return totalError === null;
  };

  const getExpirationPeriodErrorStatuses = (
    value: CardInfo['expirationPeriod'],
  ): FormValue['expirationPeriod']['errorStatuses'] => {
    const monthError = validateAll(
      expirationPeriodRules[0],
      value[0],
    ) as FormValue['expirationPeriod']['errorStatuses'][0];
    const yearError = validateAll(
      expirationPeriodRules[1],
      value[1],
    ) as FormValue['expirationPeriod']['errorStatuses'][1];

    const hasIndividualError = monthError !== null || yearError !== null;
    const combinedError = hasIndividualError
      ? null
      : (validate(
          [RULES.validMonthAndYear],
          'onBlur',
          value.join(''),
        ) as FormValue['expirationPeriod']['errorStatuses'][1]);

    return [monthError, yearError ?? combinedError];
  };

  const validateExpirationPeriodOnComplete = (value: CardInfo['expirationPeriod']) => {
    const combinedError = validate(
      [RULES.validMonthAndYear],
      'onBlur',
      value.join(''),
    ) as FormValue['expirationPeriod']['errorStatuses'][1];

    updateErrors('expirationPeriod', [null, combinedError]);
    return combinedError === null;
  };

  const validateCvcOnComplete = (value: CardInfo['cvc']) => {
    const errorStatus = validate([RULES.exactLength(cvcLength)], 'onBlur', value) as FormValue['cvc']['errorStatuses'][0];
    updateErrors('cvc', [errorStatus]);
    return errorStatus === null;
  };

  const validateCardCompanyOnComplete = (value: CardInfo['cardCompany']) => {
    const errorStatus = validateAll(cardCompanyRules, value) as FormValue['cardCompany']['errorStatuses'][0];
    updateErrors('cardCompany', [errorStatus]);
    return errorStatus === null;
  };

  const validateAllFields = () => {
    let isValid = false;

    setFormValue((prev) => {
      const cardNumbersErrorStatuses = [
        ...prev.cardNumbers.value.map((fieldValue) => validateAll([RULES.numberOnly, RULES.required], fieldValue)),
        validateAll([RULES.exactLength(cardNumbersTotalLength)], prev.cardNumbers.value.join('')),
      ] as FormValue['cardNumbers']['errorStatuses'];

      const cardCompanyErrorStatuses = [
        validateAll(cardCompanyRules, prev.cardCompany.value),
      ] as FormValue['cardCompany']['errorStatuses'];

      const expirationPeriodErrorStatuses = getExpirationPeriodErrorStatuses(prev.expirationPeriod.value);

      const cvcErrorStatuses = [validateAll(cvcRules, prev.cvc.value)] as FormValue['cvc']['errorStatuses'];

      const passwordErrorStatuses = [
        validateAll(passwordRules, prev.password.value),
      ] as FormValue['password']['errorStatuses'];

      isValid = [
        ...cardNumbersErrorStatuses,
        ...cardCompanyErrorStatuses,
        ...expirationPeriodErrorStatuses,
        ...cvcErrorStatuses,
        ...passwordErrorStatuses,
      ].every((errorStatus) => errorStatus === null);

      return {
        cardNumbers: { ...prev.cardNumbers, errorStatuses: cardNumbersErrorStatuses },
        cardCompany: { ...prev.cardCompany, errorStatuses: cardCompanyErrorStatuses },
        expirationPeriod: { ...prev.expirationPeriod, errorStatuses: expirationPeriodErrorStatuses },
        cvc: { ...prev.cvc, errorStatuses: cvcErrorStatuses },
        password: { ...prev.password, errorStatuses: passwordErrorStatuses },
      };
    });

    return isValid;
  };

  const buildCompletePageState = (): CompletePageState => ({
    firstFourDigits: formValue.cardNumbers.value[0],
    cardCompany: CARD_COMPANY_OPTIONS.find((option) => option.value === formValue.cardCompany.value)?.label ?? '카드',
  });

  const areAllFieldErrorsClear = Object.values(formValue).every((field) =>
    field.errorStatuses.every((status: ErrorStatus | ExpirationPeriodErrorStatus) => status === null),
  );

  return {
    formValue,
    derived: {
      cardBrand: cardBrand as CardBrand,
      cvcLength,
      cardNumbersTotalLength,
      areAllFieldErrorsClear,
      rules: {
        cardNumbers: cardNumbersRules,
        cardCompany: cardCompanyRules,
        expirationPeriod: expirationPeriodRules,
        cvc: cvcRules,
        password: passwordRules,
      },
    },
    actions: {
      updateValue,
      updateErrors,
      validateCardNumbersOnComplete,
      validateExpirationPeriodOnComplete,
      validateCvcOnComplete,
      validateCardCompanyOnComplete,
      validateAllFields,
      buildCompletePageState,
    },
  };
}
