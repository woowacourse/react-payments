import styles from "./CardOwner.module.css";
import Input from "@/components/Input/Input";
import Label from "@/components/Label/Label";
import type { CardOwnerState } from "../types";

export interface CardOwnerInputProps {
  cardOwner: CardOwnerState;
  handleCardOwnerChange: (value: string) => void;
}

function CardOwnerInput({
  cardOwner,
  handleCardOwnerChange,
}: CardOwnerInputProps) {
  return (
    <div className={styles.container}>
      <Label htmlFor="card-owner-input">소유자 이름</Label>
      <Input
        id="card-owner-input"
        type="text"
        inputMode="text"
        maxLength={15}
        required
        pattern="[가-힣a-zA-Z]*"
        isError={Boolean(cardOwner.errorMessage)}
        placeholder="소유자 이름을 입력해 주세요."
        value={cardOwner.value}
        onChange={(e) => handleCardOwnerChange(e.target.value)}
      />
      {cardOwner.errorMessage && (
        <span className={styles.errorMessage}>{cardOwner.errorMessage}</span>
      )}
    </div>
  );
}

export default CardOwnerInput;
