import useInput from "./useInput";
import { validateOnlyEnglishWithSpace } from "../domain/validateCardInfo";

export default function useCardHolder() {
  const useInputProps = {
    validator: (string: string) => {
      validateOnlyEnglishWithSpace(string);
    },
    decorateValue: (string: string) => string.toUpperCase(),
  };

  const holderInput = useInput(useInputProps);

  return { holderInput };
}
