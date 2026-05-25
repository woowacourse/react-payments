import { PASSWORD_LENGTH, RULES } from '../../constants';
import type { CardInfo } from '../../types';
import { validateAll } from '../../utils';
import type { FormValue } from '../../hooks/useAddCardForm';

export function validatePassword() {
  const rules = [RULES.numberOnly, RULES.required, RULES.exactLength(PASSWORD_LENGTH)];

  const runAllValidations = (value: CardInfo['password']): FormValue['password']['errorStatuses'] =>
    [validateAll(rules, value)];

  return { rules, runAllValidations };
}
