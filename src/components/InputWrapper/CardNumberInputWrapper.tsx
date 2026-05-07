import { useState } from "react";
import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";
import { getCardNumberErrorMessage } from "../../utils/getCardNumberErrorMessage";

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
  const [inputErrors, setInputErrors] = useState<{
    first: string | null;
    second: string | null;
    third: string | null;
    fourth: string | null;
  }>({
    first: null,
    second: null,
    third: null,
    fourth: null,
  });

  const setError =
    (key: "first" | "second" | "third" | "fourth") =>
    (message: string | null) => {
      setInputErrors((prev) => ({ ...prev, [key]: message }));
    };

  return (
    <InputGroup
      errorMessage={
        Object.values(inputErrors).find((err) => err !== null) ?? null
      }
    >
      {Object.entries(value).map(([cardKey, cardValue]) => (
        <NumberInput
          key={`${cardKey}-input`}
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
          style={{ width: "71px" }}
        />
      ))}
    </InputGroup>
  );
}
