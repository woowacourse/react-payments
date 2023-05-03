import { useCallback, useState } from "react";

import { CARDNUMBERS_MAXLEGNTH } from "../constants";
import { getUINumbers } from "../utils/card";

interface Props {
  setNumbers: (numbers: string) => void;
  setIsNumbersCompleted: (isCompleted: boolean) => void;
  setIsNumbersValid: (isValid: boolean) => void;
}

export const useCardNumbersInput = ({ setNumbers, setIsNumbersCompleted, setIsNumbersValid }: Props) => {
  const [postText, setPostText] = useState("");

  const saveNumbers = useCallback(
    (target: HTMLInputElement, numbers: string) => {
      setNumbers(numbers);
      setPostText(getUINumbers(numbers));
      target.value = getUINumbers(numbers);
    },
    [setNumbers, setPostText]
  );

  const updateInputFlags = useCallback(
    (postText: string, text: string) => {
      if (postText.length < text.length) {
        setIsNumbersCompleted(text.replaceAll(" - ", "").length === CARDNUMBERS_MAXLEGNTH);
        return;
      }
      setIsNumbersValid(true);
      setIsNumbersCompleted(false);
    },
    [setIsNumbersCompleted, setIsNumbersValid, setIsNumbersCompleted]
  );

  return { postText, saveNumbers, updateInputFlags };
};
