import styles from "./CardNumberInputs.module.css";
import Label from "@components/Label/Label";
import Input from "@components/Input/Input";
import { isAnyTrue } from "@utils/isAnyTrue";
import type { CardNumberInputKey, CardNumberState } from "../../types";
import { CARD_NUMBER_INPUT_KEYS } from "../../constants";
import { Fragment } from "react/jsx-runtime";

export interface CardNumberInputsProps {
  cardNumberState: CardNumberState;
  handleCardNumberChange: (key: CardNumberInputKey, value: string) => void;
}

function CardNumberInputs({
  cardNumberState,
  handleCardNumberChange,
}: CardNumberInputsProps) {
  const { first, second, third, fourth } = cardNumberState;
  const isCardNumberValid = isAnyTrue(
    first.isError,
    second.isError,
    third.isError,
    fourth.isError
  );

  return (
    <div className={styles.container}>
      <p className={styles.cardInputs}>
        {CARD_NUMBER_INPUT_KEYS.map((inputKey, idx) => (
          <div key={inputKey} className={styles.cardInputBox}>
            <Label
              htmlFor={`card-number-${inputKey}-input`}
              isHidden={idx !== 0}
            >
              카드 번호
            </Label>
            <Input
              id={`card-number-${inputKey}-input`}
              type="text"
              maxLength={4}
              placeholder="1234"
              isError={cardNumberState[inputKey].isError}
              value={cardNumberState[inputKey].value}
              onChange={(e) => handleCardNumberChange(inputKey, e.target.value)}
            />
          </div>
        ))}
      </p>
      {isCardNumberValid && (
        <p id="error-message" className={styles.errorMessage}>
          4자리의 숫자만 입력 가능합니다.
        </p>
      )}
    </div>
  );
}

export default CardNumberInputs;
