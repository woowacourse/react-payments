import { useState } from "react";
import React from "react";

interface Props {
  initialValue: string[];
  validate?: (input: string) => string;
}

//TODO: validate : 에러가 없는 경우에는 빈 문자열 반환,
//에러 있으면 에러 메세지 반환

const useInput = ({ initialValue = [], validate }: Props) => {
  const [input, setInput] = useState<string[]>(initialValue);
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const inputValue = event.target.value;

    if (validate) {
      setErrorMessage(validate(inputValue));
    }

    const isError = errorMessage !== "";
    if (isError) return [];

    setInput((prev) => {
      const copy = [...prev];
      copy[index] = inputValue;
      return copy;
    });
  };

  return { input, onChange, errorMessage };
};
export default useInput;
