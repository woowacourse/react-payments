import { ChangeEvent } from "react";
import {
  CARD_POSITION,
  CardPositionType,
  MAGIC_NUMBER,
} from "../../constants/constants";
import { InputErrorType } from "../../hooks/useInputError";
import Input from "../Input/Input";

interface CardNumberInputsProps {
  cardNumbers: Record<CardPositionType, string>;
  error: InputErrorType;
  handleCardNumberChange: (value: string, position: CardPositionType) => void;
}

const cardNumberPlaceholder = MAGIC_NUMBER.placeholders.cardNumber;
const maxLength = MAGIC_NUMBER.maxLength.cardNumber;

function CardNumberInputs({
  cardNumbers,
  error,
  handleCardNumberChange,
}: CardNumberInputsProps) {
  return (
    <>
      <Input
        placeholder={cardNumberPlaceholder}
        maxLength={maxLength}
        isError={error.cardNumbers.first}
        value={cardNumbers.first}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleCardNumberChange(e.target.value, CARD_POSITION.first)
        }
      />
      <Input
        placeholder={cardNumberPlaceholder}
        maxLength={maxLength}
        isError={error.cardNumbers.second}
        value={cardNumbers.second}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleCardNumberChange(e.target.value, CARD_POSITION.second)
        }
      />
      <Input
        placeholder={cardNumberPlaceholder}
        maxLength={maxLength}
        isError={error.cardNumbers.third}
        value={cardNumbers.third}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleCardNumberChange(e.target.value, CARD_POSITION.third)
        }
      />
      <Input
        placeholder={cardNumberPlaceholder}
        maxLength={maxLength}
        isError={error.cardNumbers.fourth}
        value={cardNumbers.fourth}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleCardNumberChange(e.target.value, CARD_POSITION.fourth)
        }
      />
    </>
  );
}
export default CardNumberInputs;
