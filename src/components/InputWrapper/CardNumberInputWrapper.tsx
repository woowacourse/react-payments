import { useState } from "react";
import { isLengthMatch } from "../../utils/isLengthMatch";
import Input from "../Input/Input";
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

  const filterOnlyNumber = (value: string) => {
    if (Number.isNaN(Number(value)) || (value !== "" && value.includes(" "))) {
      return false;
    } else return true;
  };

  return (
    <InputGroup
      errorMessage={
        Object.values(inputErrors).find((err) => err !== null) ?? null
      }
    >
      {Object.entries(value).map(([cardKey, cardValue]) => (
        <Input
          key={`${cardKey}-input`}
          value={cardValue}
          setValue={(newValue) =>
            setCardNumber({ ...value, [cardKey]: newValue })
          }
          placeholder="1234"
          isValid={(value: string) => isLengthMatch(4, value)}
          maxLength={4}
          onError={setError(cardKey as keyof CardNumbers)}
          onBlur={() => {
            const result = getCardNumberErrorMessage(value);
            if (result && result.key === cardKey)
              setError(cardKey as keyof CardNumbers)(result.message);
          }}
          filterOnlyNumber={filterOnlyNumber}
          style={{ width: "71px" }}
        />
      ))}
    </InputGroup>
  );
}
