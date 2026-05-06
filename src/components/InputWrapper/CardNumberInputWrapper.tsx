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
}

export default function CardNumberInputWrapper({
  setCardNumber,
  value,
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
          setValue={(newValue) =>
            setCardNumber({ ...value, [cardKey]: newValue })
          }
          placeholder="1234"
          hasError={inputErrors[cardKey as keyof CardNumbers] !== null}
          maxLength={4}
          onError={setError(cardKey as keyof CardNumbers)}
          onBlur={() => {
            const result = getCardNumberErrorMessage(value);
            if (result && result.key === cardKey)
              setError(cardKey as keyof CardNumbers)(result.message);
          }}
          style={{ width: "71px" }}
        />
      ))}
    </InputGroup>
  );
}
