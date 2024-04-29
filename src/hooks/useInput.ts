import { useState } from "react";

const useInput = <T extends object>(initialValue: T) => {
  const [inputValue, setInputValue] = useState<T>(initialValue);

  const handleChange = (name: string, value: string) => {
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return [inputValue, handleChange] as const;
};

export default useInput;
