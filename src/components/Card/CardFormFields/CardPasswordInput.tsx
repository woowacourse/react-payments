import { ChangeEvent } from "react";
import { CARD_FORM_TYPE } from "../../../constants/constants";
import { useCard } from "../../../hooks/useCard";
import { CardValidationType } from "../../../hooks/useCardValidation";
import Input from "../../Common/Input/Input";

const PLACEHOLDER = "비밀번호를 입력해 주세요";
const MAX_LENGTHS = 2;

export interface CardPasswordInputProps {
  passwordError: CardValidationType["password"];
  validatePassword: (value: string) => void;
}

export default function CardPasswordInput({
  passwordError,
  validatePassword,
}: CardPasswordInputProps) {
  const { password, updatePassword } = useCard();

  const handlePasswordChange = (value: string) => {
    validatePassword(value);
    updatePassword(value);
  };

  return (
    <Input
      key={CARD_FORM_TYPE.password}
      placeholder={PLACEHOLDER}
      maxLength={MAX_LENGTHS}
      isError={passwordError}
      value={password}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handlePasswordChange(e.target.value)
      }
    />
  );
}
