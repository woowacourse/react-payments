import { useCallback, useState } from "react";

import { getUINumbers } from "../utils/card";

interface Props {
  setNumbers: (numbers: string) => void;
}

export const useCardNumbersInput = ({ setNumbers }: Props) => {
  const [postText, setPostText] = useState("");

  const saveNumbers = useCallback(
    (target: HTMLInputElement, numbers: string) => {
      setNumbers(numbers);
      setPostText(getUINumbers(numbers));
      target.value = getUINumbers(numbers);
    },
    [setNumbers, setPostText]
  );

  return { postText, saveNumbers };
};
