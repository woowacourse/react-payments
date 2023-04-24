import { ChangeEvent, useState } from "react";
import { ERROR_MESSAGE } from "../constant";

export interface UseInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string | undefined;
  showError: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface UseInputOptionProps {
  name?: string;
}

export const useInput = (
  initialValue: string,
  { name }: UseInputOptionProps
): UseInputProps => {
  const [value, setValue] = useState(initialValue);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, name, pattern } = target;
    const regex = new RegExp(pattern);

    target.setCustomValidity(ERROR_MESSAGE[name]);
    if (regex.test(value)) {
      target.setCustomValidity("");
    }

    const newValue = name === "owner" ? value.toUpperCase() : value;

    setValue(newValue);
  };

  const showError = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    if (target.validity.patternMismatch) {
      target.setCustomValidity(ERROR_MESSAGE[target.name]);
      target.reportValidity();
    }
    if (target.validity.tooLong) {
      target.setCustomValidity(ERROR_MESSAGE["LONG_INPUT"]);
      target.reportValidity();
    }
  };
  return { value, onChange, name, showError };
};
