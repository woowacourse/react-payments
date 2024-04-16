import { useState } from "react";
import React from "react";

const useInput = (initialValue: string) => {
  const [input, setInput] = useState<string>(initialValue);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput(event.target.value);
  };

  return { input, onChange, setInput };
};
export default useInput;
