import { ChangeEvent, useState } from "react";

export interface UseInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export const useInput = (
  initialValue: string,
  nameValue: string
): UseInputProps => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  return { value: value, onChange: onChange, name: nameValue };
};
