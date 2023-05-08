import { INPUT_MAX_LENGTH } from "../../constants";
import { isNumber, isOverMaxLength, isValidMonth } from "../../utils";
import useInput from "../useInput";

const onChangeMonthValidator = (inputValue: string) => {
  console.log(inputValue.length);

  if (isOverMaxLength(inputValue, INPUT_MAX_LENGTH.EXPIRATION_DATE)) {
    return { hasError: true };
  }

  if (!isNumber(inputValue)) {
    return { hasError: true, message: "숫자만 입력해주세요" };
  }

  return { hasError: false };
};

const onBlurMonthValidator = (inputValue: string) => {
  console.log(inputValue.length);
  if (inputValue.length < INPUT_MAX_LENGTH.EXPIRATION_DATE) {
    return { hasError: true, message: "만료일은 MM/YY 형식으로 입력해주세요", isAllowInput: true };
  }

  if (!isValidMonth(inputValue)) {
    return { hasError: true, message: "유효한 달(01~12)를 입력해주세요", isAllowInput: true };
  }

  return { hasError: false };
};

const onChangeYearValidator = (inputValue: string) => {
  if (isOverMaxLength(inputValue, INPUT_MAX_LENGTH.EXPIRATION_DATE)) {
    return { hasError: true };
  }

  if (!isNumber(inputValue)) {
    return { hasError: true, message: "숫자만 입력해주세요" };
  }

  return { hasError: false };
};

const onBlurYearValidator = (inputValue: string) => {
  if (inputValue.length < INPUT_MAX_LENGTH.EXPIRATION_DATE) {
    return { hasError: true, message: "만료일은 MM/YY 형식으로 입력해주세요", isAllowInput: true };
  }

  return { hasError: false };
};

const useExpirationDate = () => {
  const {
    inputValue: monthValue,
    errorMessage: monthError,
    onChange: onChangeMonth,
    onBlur: onBlurMonth,
  } = useInput(onChangeMonthValidator, onBlurMonthValidator);
  const {
    inputValue: yearValue,
    errorMessage: yearError,
    onChange: onChangeYear,
    onBlur: onBlurYear,
  } = useInput(onChangeYearValidator, onBlurYearValidator);

  return {
    expirationDate: [monthValue, yearValue],
    expirationDateErrorMessage: monthError || yearError,
    onChangeExpirationDate: {
      onChangeMonth,
      onChangeYear,
    },
    onBlurExpirationDate: {
      onBlurMonth,
      onBlurYear,
    },
  };
};

export default useExpirationDate;
