import { useRef, useState } from "react";

type ValidateResult = { index: number; message: string };

type UseMultiFieldInputParams = {
  fieldCount: number;
  getMaxLength: (index: number) => number;
  validate: (values: string[]) => ValidateResult;
  onValueHandler: (values: string[]) => void;
};

export const useMultiFieldInput = ({
  fieldCount,
  getMaxLength,
  validate,
  onValueHandler,
}: UseMultiFieldInputParams) => {
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

    if (value.length === getMaxLength(index)) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBlur = () => {
    const { index, message } = validate(latestValues.current);
    setErrorIndex(index);
    setErrorMessage(message);
  };

  return {
    inputValues,
    inputRefs,
    errorMessage,
    errorIndex,
    fieldCount,
    handlers: { onChange, handleBlur },
  };
};
