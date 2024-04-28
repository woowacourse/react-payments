import useInput, { PropsWithOnFocus } from "./useInput";
import {
  validateNotBlank,
  validateOnlyEnglishWithSpace,
} from "../domain/validateCardInfo";

export default function useCardHolder({ onFocus }: PropsWithOnFocus) {
  const useInputProps = {
    validator: (string: string) => {
      validateOnlyEnglishWithSpace(string);
      validateNotBlank(string);
    },
    checkComplete: (string: string) => {
      if (!string.length) {
        return false;
      }
      return false;
    },
    onFocus: onFocus,
    decorateValue: (string: string) => string.toUpperCase(),
  };

  const holderInput = useInput(useInputProps);

  return { holderInput };
}
