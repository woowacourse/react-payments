import { RULES } from '../../constants';
import type { CardInfo } from '../../types';
import { validate, validateAll } from '../../utils';
import type { FormValue } from '../../hooks/useAddCardForm';

export function validateCvc(cvcLength: number) {
  const rules = [RULES.numberOnly, RULES.required, RULES.exactLengthOnComplete(cvcLength)];

  const runAllValidations = (value: CardInfo['cvc']): FormValue['cvc']['errorStatuses'] =>
    [validateAll(rules, value)] as FormValue['cvc']['errorStatuses'];

  const validateOnComplete = (
    value: CardInfo['cvc'],
  ): {
    errorStatuses: FormValue['cvc']['errorStatuses'];
    isValid: boolean;
  } => {
    const errorStatus = validate(rules, 'onComplete', value) as FormValue['cvc']['errorStatuses'][0];
    return {
      errorStatuses: [errorStatus],
      isValid: errorStatus === null,
    };
  };

  return { rules, runAllValidations, validateOnComplete };
}
