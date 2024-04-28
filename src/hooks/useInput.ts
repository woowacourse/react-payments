import { useState } from "react";

const useInput = (): [
  {
    value: string;
    isError: boolean;
    isDone: boolean;
  },
  (value: string) => void,
  (isError: boolean) => void,
  (isDone: boolean) => void,
] => {
  const [state, setState] = useState({
    value: "",
    isError: false,
    isDone: false,
  });

  const setIsError = (isError: boolean) => {
    setState((prevState) => ({ ...prevState, isError }));
  };

  const setIsDone = (isDone: boolean) => {
    setState((prevState) => ({ ...prevState, isDone }));
  };

  const setValue = (value: string) => {
    setState((prevState) => ({ ...prevState, value }));
  };

  return [state, setValue, setIsError, setIsDone];
};

export default useInput;
