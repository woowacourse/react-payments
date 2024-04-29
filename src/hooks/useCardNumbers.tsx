import useInput, { PropsWithOnFocus, UseInputHookValue } from "./useInput";
import { validateLength, validateOnlyDigit } from "../domain/validateCardInfo";

export default function useCardNumbers({ onFocus }: PropsWithOnFocus) {
  const useInputProps = {
    validator: (string: string) => {
      validateOnlyDigit(string);
      validateLength(string, 4);
    },
    checkComplete: (string: string) => {
      if (string.length === 4) {
        return true;
      }
      return false;
    },
    onFocus: onFocus,
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

  const cardNumbersValue = cardNumberInputs.map((input) => input.value) as [
    string,
    string,
    string,
    string,
  ];

  const isCardNumberComplete = cardNumberInputs
    .map((input) => input.isComplete)
    .every((result) => result === true);

  return { cardNumberInputs, cardNumbersValue, isCardNumberComplete };
}
