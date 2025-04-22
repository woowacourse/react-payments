import { ChangeEvent } from "react";
import {
  CARD_POSITION,
  CardPositionType,
} from "../../../../constants/constants";
import { useCard } from "../../../../hooks/useCard";
import { CardValidationType } from "../../../../hooks/useCardValidation";
import Input from "../../../Common/Input/Input";

const cardPositions = Object.values(CARD_POSITION);

const PLACEHOLDERS = "1234";
const MAX_LENGTHS = 4;

export interface CardNumberInputProps {
  error: CardValidationType; // TODO: 관련된 에러 상태만 넘겨주기
  setError: (value: string, position: CardPositionType) => void;
}

export default function CardNumberInput({
  error,
  setError,
}: CardNumberInputProps) {
  const { cardNumbers, updateCardNumber } = useCard();

  const handleCardNumberChange = (
    value: string,
    position: CardPositionType
  ) => {
    setError(value, position);
    updateCardNumber(value, position);
  };

  return (
    <>
      {cardPositions.map((position) => {
        return (
          <Input
            key={position}
            placeholder={PLACEHOLDERS}
            maxLength={MAX_LENGTHS}
            isError={error.cardNumbers[position]}
            value={cardNumbers[position]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleCardNumberChange(e.target.value, position)
            }
          />
        );
      })}
    </>
  );
}
