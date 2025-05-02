import { useState } from "react";
import { isNumber, isUnderMaxLength } from "../validation/validate";
import { indexToCardNumberKey } from "../utils/indexToCardNumberKey";
import { CARD_NUMBER_FIELDS, type CardKey } from "../types/cardKeyTypes";
import { useError } from "./useError";
import { CARD_INPUT_LIMIT } from "../constants/CardInputLimit";
import { moveFocusToNextInput } from "../utils/moveFocusToNextInput";
import { CARD_STEP } from "../constants/CardStep";

const CARD_NUMBER_ERROR_MESSAGE = {
  INVALID_LENGTH_ERROR: `카드 번호는 자리 ${CARD_INPUT_LIMIT.CARD_NUMBER_MAX_LENGTH}숫자여야 합니다.`,
  NOT_NUMBERIC_ERROR: "숫자만 입력 가능합니다.",
} as const;

export const CARD_NUMBERS: Record<CardKey, string> = {
  FIRST: "",
  SECOND: "",
  THIRD: "",
  FOURTH: "",
};

const CARD_NUMBERS_ERROR: Record<CardKey, string> = {
  FIRST: "",
  SECOND: "",
  THIRD: "",
  FOURTH: "",
};

export default function useCardNumbersInput(handleStep: () => void) {
  const [cardNumbers, setCardNumbers] = useState(CARD_NUMBERS);
  const { error: cardNumbersError, setErrorMessage } =
    useError<CardKey>(CARD_NUMBERS_ERROR);

  const onCardNumberChange = (
    value: string,
    index: number,
    step: number,
    inputRefs: React.MutableRefObject<HTMLInputElement[]>
  ) => {
    const cardNumberKey = indexToCardNumberKey(index);

    const { errorMessage, key } = validateCardNumbers(value, cardNumberKey);
    setErrorMessage(errorMessage, key);

    if (errorMessage) return;

    const newCardNumbers = { ...cardNumbers, [key]: value };
    setCardNumbers(newCardNumbers);

    if (value.length < CARD_INPUT_LIMIT.CARD_NUMBER_MAX_LENGTH) return;

    moveFocusToNextInput(inputRefs, CARD_NUMBER_FIELDS.length, index);

    const canStepFoward =
      step === CARD_STEP.NUMBER &&
      index === CARD_NUMBER_FIELDS.length - 1 &&
      Object.values(cardNumbersError).every((msg) => msg === "") &&
      newCardNumbers[key].length === CARD_INPUT_LIMIT.CARD_NUMBER_MAX_LENGTH;

    if (canStepFoward) handleStep();
  };

  return { cardNumbers, cardNumbersError, onCardNumberChange };
}

const validateCardNumbers = (value: string, key: CardKey) => {
  if (!isUnderMaxLength(value.length, CARD_INPUT_LIMIT.CARD_NUMBER_MAX_LENGTH))
    return {
      errorMessage: CARD_NUMBER_ERROR_MESSAGE.INVALID_LENGTH_ERROR,
      key: key,
    };

  if (!isNumber(value))
    return {
      errorMessage: CARD_NUMBER_ERROR_MESSAGE.NOT_NUMBERIC_ERROR,
      key: key,
    };

  return { errorMessage: "", key: key };
};
