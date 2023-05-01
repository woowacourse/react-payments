import { INPUT_MAX_LENGTH, NUMBER_OF_INPUTS } from "../../constants";
import { isNumber, isOverMaxLength } from "../../utils";
import useMultipleInputs from "../useMultipleInputs";
import useInputFocus from "../useInputFocus";

const passwordValidator = (inputValue: string) => {
  if (isOverMaxLength(inputValue, INPUT_MAX_LENGTH.PASSWORD)) {
    return { hasError: true };
  }

  if (!isNumber(inputValue)) {
    return { hasError: true, message: "숫자만 입력해주세요" };
  }

  return { hasError: false };
};

const usePassword = () => {
  const { inputValues, errorMessage, onChange } = useMultipleInputs(NUMBER_OF_INPUTS.PASSWORD, passwordValidator);

  const { registRef, isNextInputFocusable, focusNextInput } = useInputFocus(INPUT_MAX_LENGTH.PASSWORD);

  const handleChange = (inputIndex: number) => (inputValue: string) => {
    onChange(inputIndex)(inputValue);

    if (isNextInputFocusable(inputValue, inputIndex)) focusNextInput(inputIndex);
  };

  return {
    password: inputValues,
    passwordErrorMessage: errorMessage,
    onChangePassword: handleChange,
    registPasswordRef: registRef,
  };
};

export default usePassword;
