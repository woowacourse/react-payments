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

            const maxLen = cardKey === "fourth" ? fourthMaxLength : 4;
            const nextKey: Record<string, string> = {
              first: "second",
              second: "third",
              third: "fourth",
            };

            if (newValue.length === maxLen && nextKey[cardKey]) {
              inputRefs.current[nextKey[cardKey]]?.focus();
            }
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
