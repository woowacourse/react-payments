import { ChangeEvent } from "react";
import {
  CARD_NUMBERS_SEGMENT,
  MAX_LENGTH,
  PLACEHOLDER,
} from "../../../../constants/constants";
import { useCard } from "../../../../hooks/useCard";
import Input from "../../../Common/Input/Input";
import { CardFormFieldStyles } from "../CardFormFields.styled";
import { useCardValidation } from "../../../../hooks/useCardValidation";
import { CardNumbersSegmentType } from "../../../../types/types";
import useFieldFocus from "../../../../hooks/useFieldFocus";

const cardPositions = Object.values(CARD_NUMBERS_SEGMENT);

const cardNumberSequence = [
  "cardNumber-first",
  "cardNumber-second",
  "cardNumber-third",
  "cardNumber-fourth",
];

export default function CardNumberInput() {
  const { cardNumbers, updateCardNumber } = useCard();
  const { cardNumberErrors, validateCardNumber } = useCardValidation();
  const { registerRef, handleInputChange } = useFieldFocus(cardNumberSequence);

  const handleCardNumberChange = (
    value: string,
    position: CardNumbersSegmentType
  ) => {
    validateCardNumber(value, position);
    updateCardNumber(value, position);
    handleInputChange(`cardNumber-${position}`);
  };

  return (
    <CardFormFieldStyles>
      {cardPositions.map((position, index) => {
        return (
          <Input
            key={position}
            placeholder={PLACEHOLDER.cardNumber}
            maxLength={MAX_LENGTH.cardNumber}
            isError={cardNumberErrors.hasError[position]}
            value={cardNumbers[position]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleCardNumberChange(e.target.value, position)
            }
            onBlur={(e: ChangeEvent<HTMLInputElement>) =>
              handleCardNumberChange(e.target.value, position)
            }
            ref={(element) => registerRef(`cardNumber-${position}`, element)}
            autoFocus={index === 0}
          />
        );
      })}
    </CardFormFieldStyles>
  );
}
