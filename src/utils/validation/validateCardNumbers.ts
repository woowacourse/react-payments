import { RULES } from '../../constants';
import type { CardInfo } from '../../types';
import { validate, validateAll } from '../../utils';
import type { FormValue } from '../../hooks/useAddCardForm';

export function validateCardNumbers(cardNumbersTotalLength: number) {
  const rules = [RULES.numberOnly, RULES.required, RULES.exactLengthOnComplete(cardNumbersTotalLength)];

  const runAllValidations = (value: CardInfo['cardNumbers']): FormValue['cardNumbers']['errorStatuses'] => [
    validateAll([RULES.numberOnly, RULES.required], value[0]),
    validateAll([RULES.numberOnly, RULES.required], value[1]),
    validateAll([RULES.numberOnly, RULES.required], value[2]),
    validateAll([RULES.numberOnly, RULES.required], value[3]),
    validateAll(rules, value.join('')),
  ];

  const validateOnComplete = (
    value: CardInfo['cardNumbers'],
  ): {
    errorStatuses: FormValue['cardNumbers']['errorStatuses'];
    isValid: boolean;
  } => {
    const totalError = validate(rules, 'onComplete', value.join(''));
    return {
      errorStatuses: [null, null, null, null, totalError],
      isValid: totalError === null,
    };
  };

  return { rules, runAllValidations, validateOnComplete };
}
