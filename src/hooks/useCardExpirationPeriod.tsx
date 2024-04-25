import useInput, { UseInputHookValue } from "./useInput";
import {
  validateLength,
  validateMonth,
  validateYear,
} from "../domain/validateCardInfo";

export default function useCardExpirationPeriod() {
  const monthInputProps = {
    validator: (string: string) => {
      validateMonth(string);
      validateLength(string, 2);
    },
  };

  const yearInputProps = {
    validator: (string: string) => {
      validateYear(string);
      validateLength(string, 2);
    },
  };

  const monthInput = useInput(monthInputProps);
  const yearInput = useInput(yearInputProps);
  const expirationPeriodInputs: [UseInputHookValue, UseInputHookValue] = [
    monthInput,
    yearInput,
  ];

  return { expirationPeriodInputs };
}
