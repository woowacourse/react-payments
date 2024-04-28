import useInput, { PropsWithOnFocus } from "./useInput";
import { validateLength, validateOnlyDigit } from "../domain/validateCardInfo";

export default function useCardPassword({ onFocus }: PropsWithOnFocus) {
  const useInputProps = {
    validator: (string: string) => {
      validateOnlyDigit(string);
      validateLength(string, 2);
    },
    checkComplete: (string: string) => {
      if (string.length === 2) {
        return true;
      }
      return false;
    },
    onFocus: onFocus,
  };

  const passwordInput = useInput(useInputProps);

  return { passwordInput };
}
