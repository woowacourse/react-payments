import { useRef } from "react";
import { useFieldErrors } from "./useFieldErrors";
import { getCardNumberErrorMessage } from "../utils/getCardNumberErrorMessage";

export type CardNumbers = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};
export type CardBrand =
  | "visa"
  | "master"
  | "diners"
  | "amex"
  | "unionpay"
  | null;

export default function useCardNumberField(
  value: CardNumbers,
  cardBrand: CardBrand,
  onChange: (value: CardNumbers) => void,
  onComplete: (isCompleted: boolean) => void,
) {
  const { inputErrors, setError, errorMessage } = useFieldErrors([
    "first",
    "second",
    "third",
    "fourth",
  ]);

  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const fourthMaxLength =
    cardBrand === "diners" ? 2 : cardBrand === "amex" ? 3 : 4;

  const handleOnChange = (cardKey: string) => (newValue: string) => {
    setError(cardKey)(null);
    const newCardNumbers = { ...value, [cardKey]: newValue };
    onChange(newCardNumbers);

    onComplete(getCardNumberErrorMessage(newCardNumbers, cardBrand) === null);

    const maxLen = cardKey === "fourth" ? fourthMaxLength : 4;
    const nextKey: Record<string, string> = {
      first: "second",
      second: "third",
      third: "fourth",
    };

    if (newValue.length === maxLen && nextKey[cardKey]) {
      inputRefs.current[nextKey[cardKey]]?.focus();
    }
  };

  const handleOnBlur =
    (cardKey: string) => (e: React.FocusEvent<HTMLInputElement>) => {
      const currentValues = { ...value, [cardKey]: e.target.value };
      const result = getCardNumberErrorMessage(currentValues, cardBrand);
      const message = result && result.key === cardKey ? result.message : null;
      setError(cardKey)(message);
    };

  return {
    inputErrors,
    inputRefs,
    errorMessage,
    fourthMaxLength,
    handleOnChange,
    handleOnBlur,
    setError,
  };
}
