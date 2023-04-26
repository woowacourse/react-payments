import { useEffect, useRef } from "react";
import { INPUT_MAX_LENGTH, NUMBER_OF_INPUTS } from "../../constants";
import { isInputsEmpty, isInputsSatisfied, isNumber, isOverMaxLength, isValidMonth } from "../../utils";
import useMultipleInputs from "../useMultipleInputs";
import useInputFocus from "../useInputFocus";

const expirationDateValidator = (inputValue: string) => {
  if (isOverMaxLength(inputValue, INPUT_MAX_LENGTH.EXPIRATION_DATE)) {
    throw new Error();
  }

  if (!isNumber(inputValue)) {
    throw new Error("숫자만 입력해주세요");
  }
};

const useExpirationDate = () => {
  const { inputValues, errorMessage, setErrorMessage, onChange } = useMultipleInputs(
    NUMBER_OF_INPUTS.EXPIRATION_DATE,
    expirationDateValidator
  );

  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

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
  }, [inputValues, errorMessage, setErrorMessage]);

  const { isNextInputFocusable, focusNextInput } = useInputFocus(refs, INPUT_MAX_LENGTH.EXPIRATION_DATE);

  const handleChange = (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    onChange(inputIndex)(event);

    if (isNextInputFocusable(inputValue, inputIndex)) focusNextInput(inputIndex);
  };

  return {
    expirationDate: inputValues,
    expirationDateErrorMessage: errorMessage,
    onChangeExpirationDate: handleChange,
    expirationDateRefs: refs,
  };
};

export default useExpirationDate;
