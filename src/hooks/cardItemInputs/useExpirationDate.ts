import { INPUT_MAX_LENGTH } from "../../constants";
import { isNumber, isOverMaxLength, isValidMonth } from "../../utils";

import useInputFocus from "../useInputFocus";
import useInput from "../useInput";

const monthValidator = (inputValue: string) => {
  if (isOverMaxLength(inputValue, INPUT_MAX_LENGTH.EXPIRATION_DATE)) {
    return { hasError: true };
  }

  if (!isNumber(inputValue)) {
    return { hasError: true, message: "숫자만 입력해주세요" };
  }

  if (inputValue.length < INPUT_MAX_LENGTH.EXPIRATION_DATE) {
    return { hasError: true, message: "만료일은 MM/YY 형식으로 입력해주세요", allowInput: true };
  }

  if (!isValidMonth(inputValue)) {
    return { hasError: true, message: "유효한 달(01~12)를 입력해주세요", allowInput: true };
  }

  return { hasError: false };
};

const yearValidator = (inputValue: string) => {
  if (isOverMaxLength(inputValue, INPUT_MAX_LENGTH.EXPIRATION_DATE)) {
    return { hasError: true };
  }

  if (!isNumber(inputValue)) {
    return { hasError: true, message: "숫자만 입력해주세요" };
  }

  if (inputValue.length < INPUT_MAX_LENGTH.EXPIRATION_DATE) {
    return { hasError: true, message: "만료일은 MM/YY 형식으로 입력해주세요", allowInput: true };
  }

  return { hasError: false };
};

const useExpirationDate = () => {
  const { inputValue: monthValue, errorMessage: monthError, onChange: onChangeMonth } = useInput(monthValidator);
  const { inputValue: yearValue, errorMessage: yearError, onChange: onChangeYear } = useInput(yearValidator);

  const expirationDate = [monthValue, yearValue];
  const expirationDateErrorMessage = monthError || yearError;

  const { registRef, isNextInputFocusable, focusNextInput } = useInputFocus(INPUT_MAX_LENGTH.EXPIRATION_DATE);

  const handleChangeMonth = (inputValue: string) => {
    onChangeMonth(inputValue);

    if (isNextInputFocusable(inputValue, 0)) focusNextInput(0);
  };

  const handleChangeExpirationDate = {
    onChangeMonth: handleChangeMonth,
    onChangeYear,
  };

  return {
    expirationDate,
    expirationDateErrorMessage,
    onChangeExpirationDate: handleChangeExpirationDate,
    registExpirationDateRef: registRef,
  };
};

export default useExpirationDate;
