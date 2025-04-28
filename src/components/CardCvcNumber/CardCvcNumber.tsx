import { useState } from "react";
import NumberInput from "../Input/CardNumberInput";
import InputErrorMessage from "../Input/InputErrorMessage";
import InputText from "../InputText/InputText";

interface CardCvcNumberProps {
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
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
  setCompleted,
  onComplete,
}: CardCvcNumberProps) {
  const [numbers, setNumbers] = useState("");
  const [error, setError] = useState("");

  const handleCardCvcNumberChange = (value: string) => {
    if (value.length > CVC_RULE.MAX_LENGTH) return;

    const validationError =
      value.length < CVC_RULE.MAX_LENGTH ? CVC_RULE.INVALID_LENGTH_ERROR : "";

    setNumbers(value);
    setError(validationError);

    const isComplete =
      value.length === CVC_RULE.MAX_LENGTH && validationError === "";
    setCompleted(isComplete);

    if (isComplete) {
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
