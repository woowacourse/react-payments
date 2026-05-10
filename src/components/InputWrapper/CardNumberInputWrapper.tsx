import { useEffect } from "react";
import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";
import { getCardNumberErrorMessage } from "../../utils/getCardNumberErrorMessage";
import { useInputGroup } from "../../hooks/useInputGroup";
type CardNumbers = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};
interface Props {
  setCardNumber: (value: CardNumbers) => void;
  value: CardNumbers;
  onComplete: (isCompleted: boolean) => void;
  cardBrand: "visa" | "master" | "diners" | "amex" | "unionpay" | null;
}

export default function CardNumberInputWrapper({
  setCardNumber,
  value,
  onComplete,
  cardBrand,
}: Props) {
  const { inputErrors, setError, inputRefs, errorMessage } = useInputGroup([
    "first",
    "second",
    "third",
    "fourth",
  ]);
  useEffect(() => {
    if (value.first.length === 4) inputRefs.current["second"]?.focus();
  }, [value.first, inputRefs]);
  useEffect(() => {
    if (value.second.length === 4) inputRefs.current["third"]?.focus();
  }, [value.second, inputRefs]);
  useEffect(() => {
    if (value.third.length === 4) inputRefs.current["fourth"]?.focus();
  }, [value.third, inputRefs]);

  const fourthMaxLength =
    cardBrand === "diners" ? 2 : cardBrand === "amex" ? 3 : 4;
  return (
    <InputGroup errorMessage={errorMessage}>
      {Object.entries(value).map(([cardKey, cardValue]) => (
        <NumberInput
          key={`${cardKey}-input`}
          autoFocus={cardKey === "first"}
          value={cardValue}
          setValue={(newValue) => {
            const newCardNumbers = { ...value, [cardKey]: newValue };
            setCardNumber(newCardNumbers);
            onComplete(
              newCardNumbers.first.length === 4 &&
                newCardNumbers.second.length === 4 &&
                newCardNumbers.third.length === 4 &&
                newCardNumbers.fourth.length === fourthMaxLength &&
                Object.values(inputErrors).every((err) => err === null),
            );
          }}
          placeholder="1234"
          hasError={inputErrors[cardKey as keyof CardNumbers] !== null}
          maxLength={cardKey === "fourth" ? fourthMaxLength : 4}
          onError={setError(cardKey as keyof CardNumbers)}
          onBlur={() => {
            const result = getCardNumberErrorMessage(value, cardBrand);
            const message =
              result && result.key === cardKey ? result.message : null;
            setError(cardKey as keyof CardNumbers)(message);
          }}
          ref={(el) => {
            if (cardKey !== "first") inputRefs.current[cardKey] = el;
          }}
          style={{ width: "71px" }}
        />
      ))}
    </InputGroup>
  );
}
