import { Dispatch, SetStateAction, useState } from "react";

const useInput = (): [
  {
    value: string;
    isError: boolean;
    isDone: boolean;
  },
  Dispatch<
    SetStateAction<{
      value: string;
      isError: boolean;
      isDone: boolean;
    }>
  >,
] => {
  const [state, setState] = useState({
    value: "",
    isError: false,
    isDone: false,
  });
  return [state, setState];
};

export default useInput;
