import { useState } from "react";
import React from "react";

interface Props {
  initialValue: string[];
  validate?: (input: string[]) => string;
}

//TODO: validate : 에러가 없는 경우에는 빈 문자열 반환,
//에러 있으면 에러 메세지 반환

//isFocus => true일 때 검사x
//isFocus => false일때 검사해야됨

const useInput = ({ initialValue = [], validate }: Props) => {
  const [input, setInput] = useState<string[]>(initialValue);
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
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
