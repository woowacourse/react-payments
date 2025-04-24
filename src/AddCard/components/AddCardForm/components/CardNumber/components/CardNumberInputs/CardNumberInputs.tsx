import styles from "./CardNumberInputs.module.css";
import type { CardNumberInputKey, CardNumberState } from "../../types";
import { CARD_NUMBER_LENGTH, CARD_NUMBER_INPUT_KEYS } from "../../constants";
import Label from "@components/Label/Label";
import Input from "@components/Input/Input";
import { useAutoFocus } from "../../../../../../hooks/useAutoFocus";
export interface CardNumberInputsProps {
  cardNumberState: CardNumberState;
  handleCardNumberChange: (key: CardNumberInputKey, value: string) => void;
}

function CardNumberInputs({
  cardNumberState,
  handleCardNumberChange,
}: CardNumberInputsProps) {
  const { first, second, third, fourth } = cardNumberState;

  const { inputRefs, handleAutoFocus } = useAutoFocus<CardNumberInputKey>(
    CARD_NUMBER_INPUT_KEYS
  );

  const errorMessages = [
    first.errorMessage,
    second.errorMessage,
    third.errorMessage,
    fourth.errorMessage,
  ].filter((msg): msg is string => !!msg);
  //cool hack
  const latestErrorMessage = errorMessages.length
    ? errorMessages[errorMessages.length - 1]
    : "";

  const handleInputChange = (key: CardNumberInputKey, value: string) => {
    handleCardNumberChange(key, value);
    handleAutoFocus(key, value, CARD_NUMBER_INPUT_KEYS, CARD_NUMBER_LENGTH);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardInputs}>
        {CARD_NUMBER_INPUT_KEYS.map((inputKey, idx) => (
          <p key={inputKey} className={styles.cardInputBox}>
            <Label
              htmlFor={`card-number-${inputKey}-input`}
              isHidden={idx !== 0}
            >
              카드 번호
            </Label>
            <Input
              id={`card-number-${inputKey}-input`}
              type="text"
              maxLength={CARD_NUMBER_LENGTH}
              placeholder="1234"
              isError={Boolean(cardNumberState[inputKey].errorMessage)}
              value={cardNumberState[inputKey].value}
              onChange={(e) => handleInputChange(inputKey, e.target.value)}
              ref={inputRefs[inputKey]}
            />
          </p>
        ))}
      </div>

      {latestErrorMessage && (
        <span
          id="card-number-error-message"
          role="alert"
          className={styles.errorMessage}
        >
          {latestErrorMessage}
        </span>
      )}
    </div>
  );
}

export default CardNumberInputs;
