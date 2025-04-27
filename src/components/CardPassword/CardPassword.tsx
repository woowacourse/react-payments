import { useState } from "react";
import NumberInput from "../Input/CardNumberInput";
import InputErrorMessage from "../Input/InputErrorMessage";
import InputText from "../InputText/InputText";
import { isValidLength } from "../../validation/validate";

interface CardPasswordProps {
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  onComplete: () => void;
}

const CARD_PASSWORD = {
  TITLE: "비밀번호를 입력해 주세요.",
  DESCRIPTION: "앞의 2자리를 입력해주세요",
  SUBTITLE: "비밀번호 앞 2자리",
  PLACEHOLDER: "",
} as const;

const PASSWORD_RULE = {
  INVALID_LENGTH_ERROR: "카드 비밀번호는 2자리 숫자여야 합니다.",
  MAX_LENGTH: 2,
} as const;

export default function CardPassword({
  setCompleted,
  onComplete,
}: CardPasswordProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const passwordValidate = (value: string): string => {
    if (!isValidLength(value.length, PASSWORD_RULE.MAX_LENGTH)) {
      return PASSWORD_RULE.INVALID_LENGTH_ERROR;
    }
    return "";
  };

  const handleCardPasswordChange = (value: string) => {
    // 2자리 넘으면 입력 무시
    if (value.length > PASSWORD_RULE.MAX_LENGTH) {
      return;
    }

    // validation
    const validationError = passwordValidate(value);
    setPassword(value);
    setError(validationError);

    // 완료 여부 업데이트
    const isComplete =
      value.length === PASSWORD_RULE.MAX_LENGTH && validationError === "";
    setCompleted(isComplete);

    // 완성되면 onComplete 호출
    if (isComplete) {
      onComplete();
    }
  };

  return (
    <section>
      <InputText inputValue={CARD_PASSWORD.TITLE} variant="title" />
      <InputText inputValue={CARD_PASSWORD.DESCRIPTION} variant="description" />
      <InputText inputValue={CARD_PASSWORD.SUBTITLE} variant="subtitle" />
      <NumberInput
        onChange={handleCardPasswordChange}
        placeholder={CARD_PASSWORD.PLACEHOLDER}
        value={password}
        errorMessage={error}
        type="password"
      />
      <InputErrorMessage message={error} />
    </section>
  );
}
