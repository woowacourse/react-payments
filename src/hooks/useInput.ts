import { useState, useCallback, ChangeEvent, FocusEvent, useRef } from "react";
import { ERROR } from "../constants/message";

// validateMessage가 error message를 반환하도록
type ValidationFunction = (value: string) => string;

interface UseInputOptions {
  validateOnChange?: ValidationFunction[];
  validateOnBlur?: ValidationFunction[];
}

export interface UseInputReturn {
  value: string;
  ref: React.Ref;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  validateMessage: string;
}

const useInput = (initValue: string = "", options: UseInputOptions = {}) => {
  const [value, setValue] = useState(initValue);
  const [validateMessage, setValidateMessage] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const { validateOnChange, validateOnBlur } = options;

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      if (validateOnChange) {
        for (const func of validateOnChange) {
          const errorMessage = func(newValue);
          if (errorMessage !== "") {
            setValue(newValue);
            setValidateMessage(errorMessage);
            return;
          }
        }
        setValue(newValue);
        setValidateMessage("");
      }
    },
    [validateOnChange]
  );

  const onBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      // 빈 칸일 때, error
      if (newValue === "") {
        setValidateMessage(ERROR.EMPTY_INPUT);
        return;
      }
      if (validateOnBlur) {
        for (const func of validateOnBlur) {
          const errorMessage = func(newValue);
          if (errorMessage !== "") {
            setValidateMessage(errorMessage);
            return; // 에러 발생 시 반복 중단
          }
        }
      }
    },
    [validateOnBlur]
  );

  return {
    value,
    ref,
    onChange,
    onBlur,
    validateMessage,
  };
};

export default useInput;
