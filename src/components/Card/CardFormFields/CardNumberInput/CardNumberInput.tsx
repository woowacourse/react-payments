import { ChangeEvent } from "react";
import {
  CARD_NUMBERS_SEGMENT,
  CardNumbersSegmentType,
} from "../../../../constants/constants";
import { useCard } from "../../../../hooks/useCard";
import Input from "../../../Common/Input/Input";
import { CardFormFieldCSS } from "../CardFormFields.styled";
import { useCardValidation } from "../../../../hooks/useCardValidation";

const cardPositions = Object.values(CARD_NUMBERS_SEGMENT);

const PLACEHOLDERS = "1234";
const MAX_LENGTHS = 4;

export default function CardNumberInput() {
  const { cardNumbers, updateCardNumber } = useCard();
  const { cardNumberErrors, validateCardNumber } = useCardValidation();

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
            isError={cardNumberErrors.hasError[position]}
            value={cardNumbers[position]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleCardNumberChange(e.target.value, position)
            }
            onBlur={(e: ChangeEvent<HTMLInputElement>) =>
              handleCardNumberChange(e.target.value, position)
            }
          />
        );
      })}
    </CardFormFieldCSS>
  );
}
