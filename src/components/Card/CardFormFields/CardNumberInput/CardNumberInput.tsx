import { ChangeEvent } from "react";
import {
  CARD_NUMBERS_SEGMENT,
  CardNumberErrorsState,
  CardNumbersSegmentType,
} from "../../../../constants/constants";
import { useCard } from "../../../../hooks/useCard";
import Input from "../../../Common/Input/Input";
import { CardFormFieldCSS } from "../CardFormFields.styled";

const cardPositions = Object.values(CARD_NUMBERS_SEGMENT);

const PLACEHOLDERS = "1234";
const MAX_LENGTHS = 4;

export interface CardNumberInputProps {
  cardNumberErrors: CardNumberErrorsState;
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
    <CardFormFieldCSS>
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
    </CardFormFieldCSS>
  );
}
