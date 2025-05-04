import { ChangeEvent } from "react";
import {
  CARD_NUMBERS_SEGMENT,
  MAX_LENGTH,
  PLACEHOLDER,
} from "../../../../constants/card";
import { useCard } from "../../../../hooks/useCard";
import { useCardValidation } from "../../../../hooks/useCardValidation";
import useFieldFocus from "../../../../hooks/useFieldFocus";
import { CardNumberSegmentType } from "../../../../types/card";
import Input from "../../../Common/Input/Input";
import { CardFormFieldStyles } from "../CardFormFields.styled";

const cardPositions = Object.values(CARD_NUMBERS_SEGMENT);

const cardNumberSequence = [
  "cardNumber-first",
  "cardNumber-second",
  "cardNumber-third",
  "cardNumber-fourth",
];

export default function CardNumberInput() {
  const { cardNumber, updateCardNumber } = useCard();
  const { cardNumberError, validateCardNumber } = useCardValidation();
  const { registerRef, handleInputChange } = useFieldFocus(cardNumberSequence);

  const handleCardNumberChange = (
    value: string,
    position: CardNumberSegmentType
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
            isError={cardNumberError.hasError[position]}
            value={cardNumber[position]}
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
