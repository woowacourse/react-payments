import { ChangeEvent } from "react";
import { CARD_INPUT_TYPE } from "../../../../constants/constants";
import Input from "../../../Common/Input/Input";
import { useCard } from "../../../../hooks/useCard";
import { CardInputErrorType } from "../../../../hooks/useCardInputError";

const PLACEHOLDERS = "123";
const MAX_LENGTHS = 3;

export interface CardCvcInputProps {
  error: CardInputErrorType; // TODO: 관련된 에러 상태만 넘겨주기
  setError: (value: string) => void;
}

export default function CardCvcInput({ error, setError }: CardCvcInputProps) {
  const { cvcNumber, updateCvcNumber } = useCard();

  const handleCvcNumberChange = (value: string) => {
    setError(value);
    updateCvcNumber(value);
  };

  return (
    <Input
      key={CARD_INPUT_TYPE.cvcNumber}
      placeholder={PLACEHOLDERS}
      maxLength={MAX_LENGTHS}
      isError={error.cvcNumber}
      value={cvcNumber}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleCvcNumberChange(e.target.value)
      }
    />
  );
}
