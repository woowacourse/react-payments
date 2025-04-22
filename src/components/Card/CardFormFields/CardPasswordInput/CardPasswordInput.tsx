import { ChangeEvent } from "react";
import { CARD_FORM_TYPE } from "../../../../constants/constants";
import { CardValidationType } from "../../../../hooks/useCardValidation";
import Input from "../../../Common/Input/Input";

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
  const handlePasswordChange = (value: string) => {
    validatePassword(value);
    // TODO: value update하는 로직 추가
  };

  return (
    <Input
      key={CARD_FORM_TYPE.password}
      placeholder={PLACEHOLDER}
      maxLength={MAX_LENGTHS}
      isError={passwordError}
      // TODO: value 추가
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        handlePasswordChange(e.target.value);
      }}
    />
  );
}
