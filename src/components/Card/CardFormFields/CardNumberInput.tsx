import { ChangeEvent } from "react";
import {
  CARD_NUMBERS_SEGMENT,
  CardNumbersSegmentType,
} from "../../../constants/constants";
import { useCard } from "../../../hooks/useCard";
import { CardValidationType } from "../../../hooks/useCardValidation";
import Input from "../../Common/Input/Input";

const cardPositions = Object.values(CARD_NUMBERS_SEGMENT);

const PLACEHOLDERS = "1234";
const MAX_LENGTHS = 4;

export interface CardNumberInputProps {
  cardNumberErrors: CardValidationType["cardNumbers"];
  validateCardNumber: (value: string, position: CardNumbersSegmentType) => void;
}

export default function CardNumberInput({
  cardNumberErrors,
  validateCardNumber,
}: CardNumberInputProps) {
  const { cardNumbers, updateCardNumber } = useCard();

  const handleCardNumberChange = (
    value: string,
    position: CardNumbersSegmentType
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
