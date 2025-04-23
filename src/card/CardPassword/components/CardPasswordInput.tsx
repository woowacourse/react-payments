import styles from "./CardPasswordInput.module.css";
import Input from "@/components/Input/Input";
import Label from "@/components/Label/Label";
import { CardPasswordState } from "../types";

export interface CardPasswordInputProps {
  cardPasswordState: CardPasswordState;
  handleCardPasswordChange: (value: string) => void;
}

function CardPasswordInput({
  cardPasswordState,
  handleCardPasswordChange,
}: CardPasswordInputProps) {
  return (
    <div className={styles.container}>
      <Label htmlFor="card-owner-input">비밀번호 앞 2자리</Label>
      <Input
        autoFocus={true}
        id="card-password-input"
        type="password"
        inputMode="numeric"
        maxLength={2}
        required
        isError={Boolean(cardPasswordState.errorMessage)}
        placeholder="비밀번호를 입력해 주세요."
        value={cardPasswordState.value}
        onChange={(e) => handleCardPasswordChange(e.target.value)}
      />
      {cardPasswordState.errorMessage && (
        <span className={styles.errorMessage}>
          {cardPasswordState.errorMessage}
        </span>
      )}
    </div>
  );
}

export default CardPasswordInput;
