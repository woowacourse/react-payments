import { RULES } from '../../constants';
import type { CardInfo } from '../../types';
import { validate, validateAll } from '../../utils';
import type { FormValue } from '../../hooks/useAddCardForm';

export function validateCardNumbers(cardNumbersTotalLength: number) {
  const rules = [RULES.numberOnly, RULES.required, RULES.exactLengthOnComplete(cardNumbersTotalLength)];

  const runAllValidations = (value: CardInfo['cardNumbers']): FormValue['cardNumbers']['errorStatuses'] =>
    [
      ...value.map((fieldValue) => validateAll([RULES.numberOnly, RULES.required], fieldValue)),
      validateAll(rules, value.join('')),
    ] as FormValue['cardNumbers']['errorStatuses'];

  const validateOnComplete = (
    value: CardInfo['cardNumbers'],
  ): {
    errorStatuses: FormValue['cardNumbers']['errorStatuses'];
    isValid: boolean;
  } => {
    const totalError = validate(rules, 'onComplete', value.join(''));
    return {
      errorStatuses: [null, null, null, null, totalError as FormValue['cardNumbers']['errorStatuses'][4]],
      isValid: totalError === null,
    };
  };

  return { rules, runAllValidations, validateOnComplete };
}
