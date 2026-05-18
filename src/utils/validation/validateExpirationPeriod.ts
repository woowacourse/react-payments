import { PERIOD_LENGTH_PER_INPUT, RULES } from '../../constants';
import type { CardInfo, ExpirationValidationRule } from '../../types';
import { validate } from '../../utils';
import type { FormValue } from '../../hooks/useAddCardForm';

const isValidMonth = (month: string) => {
  const num = Number(month);
  return Number.isInteger(num) && num >= 1 && num <= 12;
};

const isValidYear = (year: string) => {
  const num = Number(year);
  return Number.isInteger(num) && num >= 0 && num <= 99;
};

const isValidMonthAndYear = (month: string, year: string) => {
  const currentDate = new Date();
  const currentFullYear = currentDate.getFullYear();
  const currentYear = currentFullYear % 100;
  const century = currentFullYear - currentYear;
  const currentMonth = currentDate.getMonth() + 1;

  if (!isValidMonth(month) || !isValidYear(year)) return false;

  const numYear = Number(year);
  const numMonth = Number(month);
  const fullYear = century + numYear;
  if (fullYear < currentFullYear || fullYear > currentFullYear + 5) return false;
  if (fullYear === currentFullYear && numMonth < currentMonth) return false;

  return true;
};

const validMonth: ExpirationValidationRule = { name: 'invalidMonth', fn: isValidMonth, on: ['onBlur'] };
const validYear: ExpirationValidationRule = { name: 'invalidYear', fn: isValidYear, on: ['onBlur'] };
const validMonthAndYear: ExpirationValidationRule = {
  name: 'invalidYear',
  fn: (v: string) => isValidMonthAndYear(v.slice(0, 2), v.slice(2, 4)),
  on: ['onComplete'],
};

export function validateExpirationPeriod() {
  const rules: [ExpirationValidationRule[], ExpirationValidationRule[]] = [
    [RULES.numberOnly, RULES.required, RULES.exactLength(PERIOD_LENGTH_PER_INPUT), validMonth],
    [RULES.numberOnly, RULES.required, RULES.exactLength(PERIOD_LENGTH_PER_INPUT), validYear, validMonthAndYear],
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
