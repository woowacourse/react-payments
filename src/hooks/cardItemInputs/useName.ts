import { INPUT_MAX_LENGTH } from "../../constants";
import { isEnglish, isOverMaxLength } from "../../utils";
import useInput from "../useInput";

const nameValidator = (inputValue: string) => {
  if (isOverMaxLength(inputValue, INPUT_MAX_LENGTH.NAME)) {
    throw new Error("30자 이내로 입력해주세요");
  }

  if (!isEnglish(inputValue)) {
    throw new Error("영어만 입력해주세요");
  }
};

const useName = () => {
  const { inputValue, errorMessage, onChange } = useInput(nameValidator);

  return { name: inputValue, nameErrorMessage: errorMessage, onChangeName: onChange };
};

export default useName;
