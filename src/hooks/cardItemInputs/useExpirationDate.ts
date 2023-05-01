import { INPUT_MAX_LENGTH } from "../../constants";
import { isNumber, isOverMaxLength, isValidMonth } from "../../utils";
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

  return {
    expirationDate: [monthValue, yearValue],
    expirationDateErrorMessage: monthError || yearError,
    onChangeExpirationDate: {
      onChangeMonth,
      onChangeYear,
    },
  };
};

export default useExpirationDate;
