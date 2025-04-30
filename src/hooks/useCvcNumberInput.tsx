import { useState } from "react";
import { isNumber, isUnderMaxLength } from "../validation/validate";
import { CARD_INPUT_LIMIT } from "../constants/CardInputLimit";

const CVC_NUMBER_ERROR_MESSAGE = {
  INVALID_LENGTH_ERROR: `CVC 번호는 ${CARD_INPUT_LIMIT.CVC_NUMBER_MAX_LENGTH}자리 숫자여야 합니다.`,
  NOT_NUMBERIC_ERROR: "숫자만 입력 가능합니다.",
};

export default function useCvcNumberInput() {
  const [cvcNumbers, setCardCvcNumbers] = useState("");
  const [cvcNumbersError, setCvcError] = useState("");

  const onCvcNumberChange = (value: string) => {
    const errorMesssage = validateCvcNumbers(value);
    setCvcError(errorMesssage);

    if (errorMesssage) return;
    setCardCvcNumbers(value.slice(0, CARD_INPUT_LIMIT.CVC_NUMBER_MAX_LENGTH));
  };

  return {
    cvcNumbers,
    cvcNumbersError,
    onCvcNumberChange,
  };
}

const validateCvcNumbers = (value: string) => {
  if (!isUnderMaxLength(value.length, CARD_INPUT_LIMIT.CVC_NUMBER_MAX_LENGTH))
    return CVC_NUMBER_ERROR_MESSAGE.INVALID_LENGTH_ERROR;

  if (!isNumber(value)) return CVC_NUMBER_ERROR_MESSAGE.NOT_NUMBERIC_ERROR;

  return "";
};
