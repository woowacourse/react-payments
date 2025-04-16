import styles from "./CardNumberInputs.module.css";
import Label from "../Label/Label";
import Input from "../Input/Input";
import { isAnyTrue } from "../../utils/isAnyTrue";
import type { CardNumberInputKey, CardNumberState } from "../../constants/card";

export interface CardNumberInputsProps {
  cardNumberState: CardNumberState;
  onCardNumberChange: (key: CardNumberInputKey, value: string) => void;
}

function CardNumberInputs({
  cardNumberState: { first, second, third, fourth },
  onCardNumberChange,
}: CardNumberInputsProps) {
  const isCardNumberValid = isAnyTrue(
    first.isError,
    second.isError,
    third.isError,
    fourth.isError
  );

  return (
    <div className={styles.container}>
      <Label htmlFor="card-number-input">카드 번호</Label>
      <p className={styles.cardInputs}>
        <Input
          id="card-number-input"
          type="number"
          maxLength={4}
          placeholder="1234"
          isError={first.isError}
          value={first.value}
          onChange={(e) => onCardNumberChange("first", e.target.value)}
        />
        <Input
          id="card-number-input"
          type="number"
          maxLength={4}
          placeholder="1234"
          isError={second.isError}
          value={second.value}
          onChange={(e) => onCardNumberChange("second", e.target.value)}
        />

        <Input
          id="card-number-input"
          type="number"
          maxLength={4}
          placeholder="1234"
          isError={third.isError}
          value={third.value}
          onChange={(e) => onCardNumberChange("third", e.target.value)}
        />
        <Input
          id="card-number-input"
          type="number"
          maxLength={4}
          placeholder="1234"
          isError={fourth.isError}
          value={fourth.value}
          onChange={(e) => onCardNumberChange("fourth", e.target.value)}
        />
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
