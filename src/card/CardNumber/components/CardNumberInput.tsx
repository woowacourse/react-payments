import styles from "./CardNumberInput.module.css";
import Label from "@components/Label/Label";
import Input from "@components/Input/Input";
import { isAnyTrue } from "@utils/isAnyTrue";
import { CARD_NUMBER_INPUT_KEYS } from "../constants";
import { type ControlledCardNumber } from "../hooks/useControlledCardNumber";
import type { OmitIsNextStep } from "@/types";

function CardNumberInputs({
  cardNumberState,
  cardNumberInputRefs,
  handleCardNumberChange,
}: OmitIsNextStep<ControlledCardNumber>) {
  const { first, second, third, fourth } = cardNumberState;
  const isCardNumberValid = isAnyTrue(
    first.isError,
    second.isError,
    third.isError,
    fourth.isError
  );

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
              autoFocus={idx === 0}
              ref={cardNumberInputRefs[inputKey]}
              id={`card-number-${inputKey}-input`}
              role={`card-number-${inputKey}-input`}
              type="text"
              inputMode="numeric"
              maxLength={4}
              pattern="[0-9]*"
              required
              placeholder="1234"
              isError={cardNumberState[inputKey].isError}
              value={cardNumberState[inputKey].value}
              onChange={(e) => handleCardNumberChange(inputKey, e.target.value)}
            />
          </p>
        ))}
      </div>
      {isCardNumberValid && (
        <p id="error-message" className={styles.errorMessage}>
          4자리의 숫자만 입력 가능합니다.
        </p>
      )}
    </div>
  );
}

export default CardNumberInputs;
