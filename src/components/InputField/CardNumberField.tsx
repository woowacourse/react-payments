import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";
import useCardNumberField, {
  type CardNumbers,
  type CardBrand,
} from "../../hooks/useCardNumberField";

interface Props {
  value: CardNumbers;
  cardBrand: CardBrand;
  onChange: (value: CardNumbers) => void;
  onComplete: (isCompleted: boolean) => void;
}

export default function CardNumberField({
  onChange,
  value,
  onComplete,
  cardBrand,
}: Props) {
  const {
    inputErrors,
    inputRefs,
    errorMessage,
    fourthMaxLength,
    handleOnChange,
    handleOnBlur,
    setError,
  } = useCardNumberField(value, cardBrand, onChange, onComplete);

  return (
    <InputGroup errorMessage={errorMessage}>
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
