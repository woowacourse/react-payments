import { limitNumberLength } from "@/components/utils/numberHelper";
import { useState } from "react";
import React from "react";

interface Props {
  initialValue: string[];
  validate?: (input: string[]) => string;
  maxLength?: number;
}

const useInput = ({ initialValue = [], validate, maxLength }: Props) => {
  const [input, setInput] = useState<string[]>(initialValue);
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    if (maxLength) {
      event.target.value = limitNumberLength({
        value: event.target.value,
        maxLength,
      });
    }

    const newValue = event.target.value;
    setInput((prev) => {
      const newInput = [...prev];
      newInput[index] = newValue;

      if (validate) {
        const validationError = validate(newInput);
        if (validationError) {
          setErrorMessage(validationError);
        } else {
          setErrorMessage("");
        }
      }

      return newInput;
    });
  };

  return { input, onChange, errorMessage };
};
export default useInput;
