import { INPUT_MAX_LENGTH, NUMBER_OF_INPUTS } from "../../constants";
import { isNumber, isOverMaxLength } from "../../utils";
import useMultipleInputs from "../useMultipleInputs";

const cardNumberValidator = (inputValue: string) => {
  if (isOverMaxLength(inputValue, INPUT_MAX_LENGTH.CARD_NUMBER)) {
    throw new Error();
  }

  if (!isNumber(inputValue)) {
    throw new Error("숫자만 입력해주세요");
  }
};

const useCardNumber = () => {
  const { inputValues, errorMessage, onChange } = useMultipleInputs(NUMBER_OF_INPUTS.CARD_NUMBER, cardNumberValidator);

  return { cardNumber: inputValues, cardNumberErrorMessage: errorMessage, onChangeCardNumber: onChange };
};

export default useCardNumber;
