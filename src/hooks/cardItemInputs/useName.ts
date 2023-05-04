import { INPUT_MAX_LENGTH } from "../../constants";
import { isEnglish, isOverMaxLength } from "../../utils";
import useInput from "../useInput";

const nameValidator = (inputValue: string) => {
  if (isOverMaxLength(inputValue, INPUT_MAX_LENGTH.NAME)) {
    return { hasError: true, message: "30자 이내로 입력해주세요" };
  }

  if (!isEnglish(inputValue)) {
    return { hasError: true, message: "영어로만 입력해주세요" };
  }

  return { hasError: false };
};

const useName = () => {
  const { inputValue, errorMessage, onChange } = useInput(nameValidator);

  return { name: inputValue, nameErrorMessage: errorMessage, onChangeName: onChange };
};

export default useName;
