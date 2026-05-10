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
}

export default function CardNumberInputWrapper({
  setCardNumber,
  value,
  onComplete,
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
              Object.values(newCardNumbers).every(
                (value) => value.length === 4,
              ) && Object.values(inputErrors).every((err) => err === null),
            );
          }}
          placeholder="1234"
          hasError={inputErrors[cardKey as keyof CardNumbers] !== null}
          maxLength={4}
          onError={setError(cardKey as keyof CardNumbers)}
          onBlur={() => {
            const result = getCardNumberErrorMessage(value);
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
