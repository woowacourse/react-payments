import { CARD_COMPANY_OPTIONS } from '../constants';
import type { CardInfo, ErrorStatus, ExpirationPeriodErrorStatus } from '../types';
import useCardBrand from './useCardBrand';
import useCardFormState from './useCardFormState';
import useCardFormValidation from './useCardFormValidation';

export interface FieldState<V, E extends (ErrorStatus | ExpirationPeriodErrorStatus)[] = [ErrorStatus]> {
  value: V;
  errorStatuses: E;
}

export interface FormValue {
  cardNumbers: FieldState<CardInfo['cardNumbers'], [ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus]>;
  cardCompany: FieldState<CardInfo['cardCompany']>;
  expirationPeriod: FieldState<
    CardInfo['expirationPeriod'],
    [ExpirationPeriodErrorStatus, ExpirationPeriodErrorStatus, ExpirationPeriodErrorStatus]
  >;
  cvc: FieldState<CardInfo['cvc']>;
  password: FieldState<CardInfo['password']>;
}

export type AddCardFormFieldKey = keyof FormValue;

type CompletePageState = {
  firstFourDigits: string;
  cardCompany: string;
};

export default function useAddCardForm() {
  const { formValue, setFormValue, updateValue, updateErrors, areAllFieldErrorsClear } = useCardFormState();
  const { cardBrand, cvcLength, cardNumbersTotalLength } = useCardBrand(formValue.cardNumbers.value);
  const {
    rules,
    validateCardNumbersOnComplete,
    validateExpirationPeriodOnComplete,
    validateCvcOnComplete,
    validateCardCompanyOnComplete,
    validateAllFields,
  } = useCardFormValidation({ formValue, setFormValue, updateErrors, cardNumbersTotalLength, cvcLength });

  const buildCompletePageState = (): CompletePageState => ({
    firstFourDigits: formValue.cardNumbers.value[0],
    cardCompany: CARD_COMPANY_OPTIONS.find((option) => option.value === formValue.cardCompany.value)?.label ?? '카드',
  });

  return {
    formValue,
    derived: {
      cardBrand,
      areAllFieldErrorsClear,
    },
    rules,
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
