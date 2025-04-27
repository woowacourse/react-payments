import { useState } from "react";
import NumberInput from "../Input/CardNumberInput";
import InputErrorMessage from "../Input/InputErrorMessage";
import InputText from "../InputText/InputText";

interface CardCvcNumberProps {
  numbers: string;
  setNumbers: React.Dispatch<React.SetStateAction<string>>;
  onComplete: () => void;
}

const CARD_CVC_NUMBER = {
  TITLE: "CVC 번호를 입력해 주세요.",
  SUBTITLE: "CVC",
  PLACEHOLDER: "123",
} as const;

const CVC_RULE = {
  INVALID_LENGTH_ERROR: "CVC 번호는 3자리 숫자여야 합니다.",
  MAX_LENGTH: 3,
} as const;

export default function CardCvcNumber({
  numbers,
  setNumbers,
  onComplete,
}: CardCvcNumberProps) {
  const [error, setError] = useState("");

  const cvcNumbersValidate = (value: string): string => {
    if (value.length > CVC_RULE.MAX_LENGTH) {
      return error; // 무시하고 기존 error 유지
    }

    if (value.length < CVC_RULE.MAX_LENGTH) {
      return CVC_RULE.INVALID_LENGTH_ERROR;
    }

    return ""; // 정확히 3자리면 에러 없음
  };

  const handleCardCvcNumberChange = (value: string) => {
    if (value.length > CVC_RULE.MAX_LENGTH) {
      return; // 4자리 넘어가면 입력 아예 무시
    }

    const validationError = cvcNumbersValidate(value);

    setNumbers(value);
    setError(validationError);

    const isCompleteLength = value.length === CVC_RULE.MAX_LENGTH;
    const isNoError = validationError === "";

    if (isCompleteLength && isNoError) {
      onComplete();
    }
  };

  return (
    <section>
      <InputText inputValue={CARD_CVC_NUMBER.TITLE} variant="title" />
      <InputText inputValue={CARD_CVC_NUMBER.SUBTITLE} variant="subtitle" />
      <NumberInput
        onChange={handleCardCvcNumberChange}
        placeholder={CARD_CVC_NUMBER.PLACEHOLDER}
        value={numbers}
        errorMessage={error}
        type="text"
      />
      <InputErrorMessage message={error} />
    </section>
  );
}
