import { InputInfo } from '../type/input';

export function checkInputValdiation(allInputs: InputInfo[]) {
  const requiredInputs = allInputs.filter((input) => input.required);
  const isRequiredInputValid = requiredInputs.every(
    ({ value, isError }) => value && !isError
  );

  const optionalInputs = allInputs.filter((input) => !input.required);
  const isOptionalInputValid = optionalInputs.every(({ value, isError }) =>
    value ? value && !isError : true
  );

  return { isRequiredInputValid, isOptionalInputValid };
}
