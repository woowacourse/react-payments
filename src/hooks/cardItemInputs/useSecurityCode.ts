import { INPUT_MAX_LENGTH } from "../../constants";
import { isNumber, isOverMaxLength } from "../../utils";
import useInput from "../useInput";

const securityCodeValidator = (inputValue: string) => {
  if (isOverMaxLength(inputValue, INPUT_MAX_LENGTH.SECURITY_CODE)) {
    throw new Error();
  }

  if (!isNumber(inputValue)) {
    throw new Error("숫자만 입력해주세요");
  }
};

const useSecurityCode = () => {
  const { inputValue, errorMessage, onChange } = useInput(securityCodeValidator);

  return { securityCode: inputValue, securityCodeErrorMessage: errorMessage, onChangeSecurityCode: onChange };
};

export default useSecurityCode;
