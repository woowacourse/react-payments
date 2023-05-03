import { PASSWORD_MAXLEGNTH } from "../constants";

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
  isPassWordsCompleted: React.MutableRefObject<boolean[]>;
  setIsPassWordCompleted: (valid: boolean) => void;
}

export const usePasswordInput = ({ inputRef, isPassWordsCompleted, setIsPassWordCompleted }: Props) => {
  const moveFocus = (index: number, text: string) => {
    if (inputRef.current === null) return;
    if (index === 0 && text.length === 1) inputRef.current.focus();
  };

  const updateInputFlags = (index: number, text: string) => {
    isPassWordsCompleted.current[index] = false;
    if (text.length === PASSWORD_MAXLEGNTH) isPassWordsCompleted.current[index] = true;

    setIsPassWordCompleted(false);
    if (isPassWordsCompleted.current.every((isCompleted) => isCompleted)) setIsPassWordCompleted(true);
  };

  return { moveFocus, updateInputFlags };
};
