import { ChangeEvent, useState } from "react";

export interface UseInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string | undefined;
  error: string | undefined;
}

interface UseInputOptionProps {
  name?: string;
  validate?: (text: string) => boolean;
  errorMessage?: string;
}

export const useInput = (
  initialValue: string,
  { name, validate = () => true, errorMessage }: UseInputOptionProps
): UseInputProps => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | undefined>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (validate(value)) {
      setValue(value);
      setError("");
      return;
    }

    setError(errorMessage);
  };

  return { value, onChange, name, error };
};
