import { PERIOD_LENGTH_PER_INPUT, RULES } from '../../constants';
import type { CardInfo, ExpirationValidationRule } from '../../types';
import { validate } from '../../utils';
import type { FormValue } from '../useAddCardForm';

export default function useExpirationPeriodValidation() {
  const rules: [ExpirationValidationRule[], ExpirationValidationRule[]] = [
    [RULES.numberOnly, RULES.required, RULES.exactLength(PERIOD_LENGTH_PER_INPUT), RULES.validMonth],
    [
      RULES.numberOnly,
      RULES.required,
      RULES.exactLength(PERIOD_LENGTH_PER_INPUT),
      RULES.validYear,
      RULES.validMonthAndYear,
    ],
  ];

  const runAllValidations = (value: CardInfo['expirationPeriod']): FormValue['expirationPeriod']['errorStatuses'] => {
    const monthError = validate(rules[0], 'onBlur', value[0]) as FormValue['expirationPeriod']['errorStatuses'][0];
    const yearError = validate(rules[1], 'onBlur', value[1]) as FormValue['expirationPeriod']['errorStatuses'][1];
    const hasIndividualError = monthError !== null || yearError !== null;
    const totalError = hasIndividualError
      ? null
      : (validate(rules[1], 'onComplete', value.join('')) as FormValue['expirationPeriod']['errorStatuses'][2]);
    return [monthError, yearError, totalError];
  };

  const validateOnComplete = (
    value: CardInfo['expirationPeriod'],
  ): {
    errorStatuses: FormValue['expirationPeriod']['errorStatuses'];
    isValid: boolean;
  } => {
    const totalError = validate(
      rules[1],
      'onComplete',
      value.join(''),
    ) as FormValue['expirationPeriod']['errorStatuses'][2];
    return {
      errorStatuses: [null, null, totalError],
      isValid: totalError === null,
    };
  };

  return { rules, runAllValidations, validateOnComplete };
}
