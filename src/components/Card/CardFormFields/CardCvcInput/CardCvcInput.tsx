import { ChangeEvent } from "react";
import { CARD_FORM_TYPE } from "../../../../constants/constants";
import { useCard } from "../../../../hooks/useCard";
import { CardValidationType } from "../../../../hooks/useCardValidation";
import Input from "../../../Common/Input/Input";
import { CardFormFieldCSS } from "../CardFormFields.styled";

const PLACEHOLDERS = "123";
const MAX_LENGTHS = 3;

export interface CardCvcInputProps {
  cvcNumberError: CardValidationType["cvcNumber"];
  validateCvcNumber: (value: string) => void;
}

export default function CardCvcInput({
  cvcNumberError,
  validateCvcNumber,
}: CardCvcInputProps) {
  const { cvcNumber, updateCvcNumber } = useCard();

  const handleCvcNumberChange = (value: string) => {
    validateCvcNumber(value);
    updateCvcNumber(value);
  };

  return (
    <CardFormFieldCSS>
      <Input
        key={CARD_FORM_TYPE.cvcNumber}
        placeholder={PLACEHOLDERS}
        maxLength={MAX_LENGTHS}
        isError={cvcNumberError}
        value={cvcNumber}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleCvcNumberChange(e.target.value)
        }
      />
    </CardFormFieldCSS>
  );
}
