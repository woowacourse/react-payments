import useInput, { PropsWithOnFocus, UseInputHookValue } from "./useInput";
import {
  validateLength,
  validateMonth,
  validateYear,
} from "../domain/validateCardInfo";

export default function useCardExpirationPeriod({ onFocus }: PropsWithOnFocus) {
  const monthInputProps = {
    validator: (string: string) => {
      validateMonth(string);
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

  const yearInputProps = {
    validator: (string: string) => {
      validateYear(string);
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

  const monthInput = useInput(monthInputProps);
  const yearInput = useInput(yearInputProps);
  const expirationPeriodInputs: [UseInputHookValue, UseInputHookValue] = [
    monthInput,
    yearInput,
  ];

  const cardExpirationPeriodValue = expirationPeriodInputs.map(
    (input) => input.value
  ) as [string, string];

  const isCardExpirationPeriodComplete = expirationPeriodInputs
    .map((input) => input.isComplete)
    .every((result) => result === true);

  return {
    expirationPeriodInputs,
    cardExpirationPeriodValue,
    isCardExpirationPeriodComplete,
  };
}
