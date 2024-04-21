import { limitNumberLength } from "@/utils/numberHelper";
import { useState } from "react";
import React from "react";

interface Props {
  initialValue: string[];
  maxNumberLength?: number;
}

const useInputs = ({ maxNumberLength, initialValue = [] }: Props) => {
  const [inputs, setInputs] = useState<string[]>(initialValue);
  const [errorMessage, setErrorMessage] = useState<(string | null)[]>(
    new Array(inputs.length).fill(null)
  );

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    if (maxNumberLength) {
      event.target.value = limitNumberLength({
        value: event.target.value,
        maxLength: maxNumberLength,
      });
    }

    const newValue = event.target.value;

    setInputs((prev) => {
      const newInput = [...prev];
      newInput[index] = newValue;
      return newInput;
    });
  };

  return { inputs, onChange, errorMessage, setErrorMessage };
};
export default useInputs;
