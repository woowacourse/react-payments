import { ChangeEvent } from "react";
import {
  CARD_POSITION,
  CardPositionType,
} from "../../../../constants/constants";
import { useCard } from "../../../../hooks/useCard";
import Input from "../../../Common/Input/Input";
import { CardValidationType } from "../../../../hooks/useCardValidation";

const cardPositions = Object.values(CARD_POSITION);

const PLACEHOLDERS = "1234";
const MAX_LENGTHS = 4;

export interface CardNumberInputProps {
  cardNumberErrors: CardValidationType["cardNumbers"];
  validateCardNumber: (value: string, position: CardPositionType) => void;
}

export default function CardNumberInput({
  cardNumberErrors,
  validateCardNumber,
}: CardNumberInputProps) {
  const { cardNumbers, updateCardNumber } = useCard();

  const handleCardNumberChange = (
    value: string,
    position: CardPositionType
  ) => {
    validateCardNumber(value, position);
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
            isError={cardNumberErrors[position]}
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
