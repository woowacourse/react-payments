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
import type { CardBrand, CardInfo, ErrorStatus, ExpirationPeriodErrorStatus } from '../types';
import { categorizeCardBrand, validate, validateAll, type ValidationRule } from '../utils';

export interface CardNumbersFieldState {
  value: CardInfo['cardNumbers'];
  errorStatuses: [ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus];
}

export interface ExpirationPeriodFieldState {
  value: CardInfo['expirationPeriod'];
  errorStatuses: [ExpirationPeriodErrorStatus, ExpirationPeriodErrorStatus];
}

export interface FieldState<T> {
  value: T;
  errorStatuses: [ErrorStatus];
}

export interface FormValue {
  cardNumbers: CardNumbersFieldState;
  cardCompany: FieldState<CardInfo['cardCompany']>;
  expirationPeriod: ExpirationPeriodFieldState;
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

type UseAddCardFormParams = {
  initialValue: FormValue;
};

type CompletePageState = {
  firstFourDigits: string;
  cardCompany: string;
};

export default function useAddCardForm({ initialValue }: UseAddCardFormParams) {
  const [formValue, setFormValue] = useState<FormValue>(initialValue);

  const cardBrand = categorizeCardBrand(formValue.cardNumbers.value);
  const cvcLength = CARD_CVC_MAX_LENGTH[cardBrand] ?? DEFAULT_CVC_LENGTH;
  const cardNumbersTotalLength = CARD_TOTAL_LENGTH[cardBrand] ?? DEFAULT_CARD_TOTAL_LENGTH;

  const cardNumbersRules = [RULES.numberOnly, RULES.required, RULES.exactLength(cardNumbersTotalLength)];
  const expirationPeriodRules: [ValidationRule[], ValidationRule[]] = [
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
    // 개별 에러가 이미 있으면 조합 검증은 건너뜀
    const hasIndividualError = monthError !== null || yearError !== null;
    const combinedError = hasIndividualError
      ? null
      : (validate(
          [RULES.validMonthAndYear],
          'onBlur',
          value.join(''),
        ) as FormValue['expirationPeriod']['errorStatuses'][1]);

    // year 개별 에러가 없을 때만 조합 에러(만료 여부)를 year 자리에 표시
    return [monthError, yearError ?? combinedError];
  };

  const validateExpirationPeriodOnComplete = (value: CardInfo['expirationPeriod']) => {
    const errorStatuses = getExpirationPeriodErrorStatuses(value);
    updateErrors('expirationPeriod', errorStatuses);
    return errorStatuses.every((status) => status === null);
  };

  const validateCvcOnComplete = (value: CardInfo['cvc']) => {
    const errorStatus = validateAll(cvcRules, value) as FormValue['cvc']['errorStatuses'][0];
    updateErrors('cvc', [errorStatus]);
    return errorStatus === null;
  };

  const validateCardCompanyOnComplete = (value: CardInfo['cardCompany']) => {
    const errorStatus = validateAll(cardCompanyRules, value) as FormValue['cardCompany']['errorStatuses'][0];
    updateErrors('cardCompany', [errorStatus]);
    return errorStatus === null;
  };

  const validateAllFields = () => {
    const cardNumbersErrorStatuses = [
      ...formValue.cardNumbers.value.map((fieldValue) => validateAll([RULES.numberOnly, RULES.required], fieldValue)),
      validateAll([RULES.exactLength(cardNumbersTotalLength)], formValue.cardNumbers.value.join('')),
    ] as FormValue['cardNumbers']['errorStatuses'];

    const cardCompanyErrorStatuses = [
      validateAll(cardCompanyRules, formValue.cardCompany.value),
    ] as FormValue['cardCompany']['errorStatuses'];

    const expirationPeriodErrorStatuses = getExpirationPeriodErrorStatuses(formValue.expirationPeriod.value);

    const cvcErrorStatuses = [validateAll(cvcRules, formValue.cvc.value)] as FormValue['cvc']['errorStatuses'];

    const passwordErrorStatuses = [
      validateAll(passwordRules, formValue.password.value),
    ] as FormValue['password']['errorStatuses'];

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
    },
    fieldProps: {
      cardNumbers: {
        value: formValue.cardNumbers.value,
        errorStatuses: formValue.cardNumbers.errorStatuses,
        onUpdated: (value: CardInfo['cardNumbers']) => updateValue('cardNumbers', value),
        onErrorUpdated: (errorStatuses: FormValue['cardNumbers']['errorStatuses']) =>
          updateErrors('cardNumbers', errorStatuses),
        validationRules: cardNumbersRules.slice(0, 2),
      },
      cardCompany: {
        value: formValue.cardCompany.value,
        errorStatuses: formValue.cardCompany.errorStatuses,
        onUpdated: (value: CardInfo['cardCompany']) => updateValue('cardCompany', value),
        onErrorUpdated: (errorStatuses: FormValue['cardCompany']['errorStatuses']) =>
          updateErrors('cardCompany', errorStatuses),
        validationRules: cardCompanyRules,
      },
      expirationPeriod: {
        value: formValue.expirationPeriod.value,
        errorStatuses: formValue.expirationPeriod.errorStatuses,
        onUpdated: (value: CardInfo['expirationPeriod']) => updateValue('expirationPeriod', value),
        onErrorUpdated: (errorStatuses: FormValue['expirationPeriod']['errorStatuses']) =>
          updateErrors('expirationPeriod', errorStatuses),
        validationRules: expirationPeriodRules,
      },
      cvc: {
        value: formValue.cvc.value,
        errorStatuses: formValue.cvc.errorStatuses,
        minLength: DEFAULT_CVC_LENGTH,
        maxLength: cvcLength,
        onUpdated: (value: CardInfo['cvc']) => updateValue('cvc', value),
        onErrorUpdated: (errorStatuses: FormValue['cvc']['errorStatuses']) => updateErrors('cvc', errorStatuses),
        validationRules: cvcRules,
      },
      password: {
        value: formValue.password.value,
        errorStatuses: formValue.password.errorStatuses,
        onUpdated: (value: CardInfo['password']) => updateValue('password', value),
        onErrorUpdated: (errorStatuses: FormValue['password']['errorStatuses']) =>
          updateErrors('password', errorStatuses),
        validationRules: passwordRules,
      },
    },
    actions: {
      validateCardNumbersOnComplete,
      validateExpirationPeriodOnComplete,
      validateCvcOnComplete,
      validateCardCompanyOnComplete,
      validateAllFields,
      buildCompletePageState,
    },
  };
}
