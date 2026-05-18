import { PASSWORD_LENGTH, RULES } from '../../constants';
import type { CardInfo } from '../../types';
import { validateAll } from '../../utils';
import type { FormValue } from '../useAddCardForm';

export default function usePasswordValidation() {
  const rules = [RULES.numberOnly, RULES.required, RULES.exactLength(PASSWORD_LENGTH)];

  const runAllValidations = (value: CardInfo['password']): FormValue['password']['errorStatuses'] =>
    [validateAll(rules, value)] as FormValue['password']['errorStatuses'];

  return { rules, runAllValidations };
}
