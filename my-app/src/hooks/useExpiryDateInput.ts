import { useRef, useState } from "react";

import { EXPIRY_FIELD_COUNT, EXPIRY_FIELD_MAX_LENGTH } from "../constants/cardField";
import { validateExpiry } from "../utils/validators";

type UseExpiryDateInputParams = {
  onValueHandler: (values: string[]) => void;
};

export const useExpiryDateInput = ({ onValueHandler }: UseExpiryDateInputParams) => {
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorIndex, setErrorIndex] = useState<number>(-1);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const latestValues = useRef<string[]>([]);

  const onChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    latestValues.current = newValues;

    setInputValues(newValues);
    setErrorMessage("");
    onValueHandler(newValues);

    if (value.length === EXPIRY_FIELD_MAX_LENGTH) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBlur = () => {
    const { index, message } = validateExpiry(latestValues.current);
    setErrorIndex(index);
    setErrorMessage(message);
  };

  return {
    inputValues,
    inputRefs,
    errorMessage,
    errorIndex,
    fieldCount: EXPIRY_FIELD_COUNT,
    fieldMaxLength: EXPIRY_FIELD_MAX_LENGTH,
    handlers: { onChange, handleBlur },
  };
};
