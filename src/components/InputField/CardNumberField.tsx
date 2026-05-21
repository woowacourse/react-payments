import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";
import { useFieldErrors } from "../../hooks/useFieldErrors";
import { useRef } from "react";
import { getCardNumberErrorMessage } from "../../utils/getCardNumberErrorMessage";

export type CardNumbers = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

type CardBrand = "visa" | "master" | "diners" | "amex" | "unionpay" | null;
interface Props {
  value: CardNumbers;
  cardBrand: CardBrand;
  onChange: (value: CardNumbers) => void;
  onComplete: (isCompleted: boolean) => void;
  errorMessage: string | null;
}

export default function CardNumberField({
  onChange,
  value,
  onComplete,
  cardBrand,
  errorMessage,
}: Props) {
  const {
    inputErrors,
    setError,
    errorMessage: localError,
  } = useFieldErrors(["first", "second", "third", "fourth"]);

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

  return (
    <InputGroup errorMessage={localError || errorMessage}>
      {Object.entries(value).map(([cardKey, cardValue]) => (
        <NumberInput
          key={`${cardKey}-input`}
          autoFocus={cardKey === "first"}
          value={cardValue}
          onChange={handleOnChange(cardKey)}
          placeholder="1234"
          hasError={inputErrors[cardKey] !== null}
          maxLength={cardKey === "fourth" ? fourthMaxLength : 4}
          onError={setError(cardKey)}
          onBlur={handleOnBlur(cardKey)}
          ref={(el) => {
            if (cardKey !== "first") inputRefs.current[cardKey] = el;
          }}
          style={{ width: "71px" }}
        />
      ))}
    </InputGroup>
  );
}
