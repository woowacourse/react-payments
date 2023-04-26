import { INPUT_MAX_LENGTH, NUMBER_OF_INPUTS } from "../../constants";
import { isNumber, isOverMaxLength } from "../../utils";
import useMultipleInputs from "../useMultipleInputs";

const passwordValidator = (inputValue: string) => {
  if (isOverMaxLength(inputValue, INPUT_MAX_LENGTH.PASSWORD)) {
    throw new Error();
  }

  if (!isNumber(inputValue)) {
    throw new Error("숫자만 입력해주세요");
  }
};

const usePassword = () => {
  const { inputValues, errorMessage, onChange } = useMultipleInputs(NUMBER_OF_INPUTS.PASSWORD, passwordValidator);

  return { password: inputValues, passwordErrorMessage: errorMessage, onChangePassword: onChange };
};

export default usePassword;
