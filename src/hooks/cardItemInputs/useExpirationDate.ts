import { useEffect } from "react";
import { INPUT_MAX_LENGTH, NUMBER_OF_INPUTS } from "../../constants";
import { isInputsEmpty, isInputsSatisfied, isNumber, isOverMaxLength, isValidMonth } from "../../utils";
import useMultipleInputs from "../useMultipleInputs";
import useInputFocus from "../useInputFocus";

const expirationDateValidator = (inputValue: string) => {
  if (isOverMaxLength(inputValue, INPUT_MAX_LENGTH.EXPIRATION_DATE)) {
    return { hasError: true };
  }

  if (!isNumber(inputValue)) {
    return { hasError: true, message: "숫자만 입력해주세요" };
  }

  return { hasError: false };
};

const useExpirationDate = () => {
  const { inputValues, errorMessage, setErrorMessage, onChange } = useMultipleInputs(
    NUMBER_OF_INPUTS.EXPIRATION_DATE,
    expirationDateValidator
  );

  useEffect(() => {
    if (isInputsEmpty(inputValues)) return;

    if (!isInputsSatisfied(inputValues, INPUT_MAX_LENGTH.EXPIRATION_DATE)) {
      setErrorMessage("만료일은 MM/YY 형식으로 입력해주세요");
      return;
    }

    if (!isValidMonth(inputValues[0])) {
      setErrorMessage("유효한 달을 입력해주세요");
      return;
    }
  }, [inputValues, setErrorMessage]);

  const { registRef, isNextInputFocusable, focusNextInput } = useInputFocus(INPUT_MAX_LENGTH.EXPIRATION_DATE);

  const handleChange = (inputIndex: number) => (inputValue: string) => {
    onChange(inputIndex)(inputValue);

    if (isNextInputFocusable(inputValue, inputIndex)) focusNextInput(inputIndex);
  };

  return {
    expirationDate: inputValues,
    expirationDateErrorMessage: errorMessage,
    onChangeExpirationDate: handleChange,
    registExpirationDateRef: registRef,
  };
};

export default useExpirationDate;
