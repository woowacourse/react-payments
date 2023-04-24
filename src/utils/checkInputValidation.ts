import { InputInfo } from '../type/input';

export function checkInputValdiation(allInputs: InputInfo[]) {
  const requiredInputs = allInputs.filter((input) => input.required);
  const isRequiredInputValid = requiredInputs.every(
    ({ value, error }) => value && !error
  );

  const optionalInputs = allInputs.filter((input) => !input.required);
  const isOptionalInputValid = optionalInputs.every(({ value, error }) =>
    value ? value && !error : true
  );

  return { isRequiredInputValid, isOptionalInputValid };
}
