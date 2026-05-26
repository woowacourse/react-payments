import { RULES } from '../../constants';
import type { CardInfo } from '../../types';
import { validate, validateAll } from '../../utils';
import type { FormValue } from '../../hooks/useAddCardForm';

export function validateCardCompany() {
  const rules = [RULES.required];

  const runAllValidations = (value: CardInfo['cardCompany']): FormValue['cardCompany']['errorStatuses'] => [
    validateAll(rules, value),
  ];

  const validateOnComplete = (
    value: CardInfo['cardCompany'],
  ): {
    errorStatuses: FormValue['cardCompany']['errorStatuses'];
    isValid: boolean;
  } => {
    const errorStatus = validate(rules, 'onComplete', value);
    return {
      errorStatuses: [errorStatus],
      isValid: errorStatus === null,
    };
  };

  return { rules, runAllValidations, validateOnComplete };
}
