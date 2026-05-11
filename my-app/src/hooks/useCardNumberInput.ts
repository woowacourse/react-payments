import { useRef, useState } from "react";

import { CARD_NUMBER_FIELD_COUNT, CARD_NUMBER_FIELD_MAX_LENGTH } from "../constants/cardField";
import {
  SUPPORTED_NETWORKS_MESSAGE,
  getRequiredLengthForDetection,
} from "../utils/cardNetwork";
import { validateCardNumbers } from "../utils/validators";

type UseCardNumberInputParams = {
  onValueHandler: (numbers: string[]) => void;
  maxLength: number;
  isSupportedNetwork: boolean;
};

export const useCardNumberInput = ({
  onValueHandler,
  maxLength,
  isSupportedNetwork,
}: UseCardNumberInputParams) => {
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorIndex, setErrorIndex] = useState<number>(-1);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const latestValues = useRef<string[]>([]);

  const lastInputMaxLength = maxLength - CARD_NUMBER_FIELD_MAX_LENGTH * (CARD_NUMBER_FIELD_COUNT - 1);

  const totalDigits = inputValues.join("");
  const warningMessage =
    !isSupportedNetwork && totalDigits.length >= getRequiredLengthForDetection(totalDigits)
      ? SUPPORTED_NETWORKS_MESSAGE
      : "";

  const onChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    latestValues.current = newValues;

    setInputValues(newValues);
    setErrorMessage("");
    onValueHandler(newValues);

    const currentMax = index === CARD_NUMBER_FIELD_COUNT - 1 ? lastInputMaxLength : CARD_NUMBER_FIELD_MAX_LENGTH;
    if (value.length === currentMax) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBlur = () => {
    const { index, message } = validateCardNumbers(latestValues.current);
    setErrorIndex(index);
    setErrorMessage(message);
  };

  return {
    inputValues,
    inputRefs,
    errorMessage,
    errorIndex,
    warningMessage,
    fieldCount: CARD_NUMBER_FIELD_COUNT,
    fieldMaxLength: CARD_NUMBER_FIELD_MAX_LENGTH,
    lastInputMaxLength,
    handlers: { onChange, handleBlur },
  };
};
