import useInput, { PropsWithOnFocus } from "./useInput";
import { validateLength, validateOnlyDigit } from "../domain/validateCardInfo";

export default function useCardCvcNumber({ onFocus }: PropsWithOnFocus) {
  const useInputProps = {
    validator: (string: string) => {
      validateOnlyDigit(string);
      validateLength(string, 3);
    },
    checkComplete: (string: string) => {
      if (string.length === 3) {
        return true;
      }
      return false;
    },
    onFocus: onFocus,
  };

  const cvcInput = useInput(useInputProps);

  return {
    cvcInput,
    cardCvcNumberValue: cvcInput.value,
    isCardCvcNumberComplete: cvcInput.isComplete,
  };
}
