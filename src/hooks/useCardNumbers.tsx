import useInput, { UseInputHookValue } from "./useInput";
import { validateLength, validateOnlyDigit } from "../domain/validateCardInfo";

export default function useCardNumbers() {
  const useInputProps = {
    validator: (string: string) => {
      validateOnlyDigit(string);
      validateLength(string, 4);
    },
  };

  const firstInput = useInput(useInputProps);
  const secondInput = useInput(useInputProps);
  const thirdInput = useInput(useInputProps);
  const fourthInput = useInput(useInputProps);

  const cardNumberInputs: [
    UseInputHookValue,
    UseInputHookValue,
    UseInputHookValue,
    UseInputHookValue,
  ] = [firstInput, secondInput, thirdInput, fourthInput];

  return { cardNumberInputs };
}
