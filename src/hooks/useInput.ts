import { useState, useCallback, ChangeEvent, FocusEvent } from "react";
import { ERROR } from "../constants/message";

// validateMessage가 error message를 반환하도록
type ValidationFunction = (value: string) => string;

interface UseInputOptions {
  validateOnChange?: ValidationFunction[];
  validateOnBlur?: ValidationFunction[];
}

const useInput = (initValue: string = "", options: UseInputOptions = {}) => {
  const [value, setValue] = useState(initValue);
  const [validateMessage, setValidateMessage] = useState("");

  const { validateOnChange, validateOnBlur } = options;

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      if (validateOnChange) {
        validateOnChange.map((func) => {
          const errorMessage = func(newValue);

          if (errorMessage !== "") {
            setValidateMessage(errorMessage);
            return;
          }
          setValue(newValue);
          setValidateMessage("");
          return;
        });
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
        validateOnBlur.map((func) => {
          const errorMessage = func(newValue);

          if (errorMessage !== "") {
            setValidateMessage(errorMessage);
            return;
          }
        });
      }
    },
    [validateOnBlur]
  );

  return {
    value,
    onChange,
    onBlur,
    validateMessage,
  };
};

export default useInput;
