import { INPUT_MAX_LENGTH, NUMBER_OF_INPUTS } from "../../constants";
import { isNumber, isOverMaxLength } from "../../utils";
import useMultipleInputs from "../useMultipleInputs";
import useInputFocus from "../useInputFocus";

const cardNumberValidator = (inputValue: string) => {
  if (isOverMaxLength(inputValue, INPUT_MAX_LENGTH.CARD_NUMBER)) {
    return { hasError: true };
  }

  if (!isNumber(inputValue)) {
    return { hasError: true, message: "숫자만 입력해주세요" };
  }

  return { hasError: false };
};

const useCardNumber = () => {
  const { inputValues, errorMessage, onChange } = useMultipleInputs(NUMBER_OF_INPUTS.CARD_NUMBER, cardNumberValidator);

  const { registRef, isNextInputFocusable, focusNextInput } = useInputFocus(INPUT_MAX_LENGTH.CARD_NUMBER);

  const handleChange = (inputIndex: number) => (inputValue: string) => {
    onChange(inputIndex)(inputValue);

    if (isNextInputFocusable(inputValue, inputIndex)) focusNextInput(inputIndex);
  };

  return {
    cardNumber: inputValues,
    cardNumberErrorMessage: errorMessage,
    onChangeCardNumber: handleChange,
    registCardNumberRef: registRef,
  };
};

export default useCardNumber;
