import { ChangeEvent } from "react";
import {
  CARD_FORM_TYPE,
  MAX_LENGTH,
  PLACEHOLDER,
} from "../../../../constants/card";
import { useCard } from "../../../../hooks/useCard";
import { useCardValidation } from "../../../../hooks/useCardValidation";
import Input from "../../../Common/Input/Input";
import { CardFormFieldStyles } from "../CardFormFields.styled";

export default function CardCvcInput() {
  const { cvcNumber, updateCvcNumber } = useCard();
  const { cvcNumberError, validateCvcNumber } = useCardValidation();

  const handleCvcNumberChange = (value: string) => {
    validateCvcNumber(value);
    updateCvcNumber(value);
  };

  return (
    <CardFormFieldStyles>
      <Input
        key={CARD_FORM_TYPE.cvcNumber}
        placeholder={PLACEHOLDER.cvcNumber}
        maxLength={MAX_LENGTH.cvcNumber}
        isError={cvcNumberError.hasError}
        value={cvcNumber}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleCvcNumberChange(e.target.value)
        }
        onBlur={(e: ChangeEvent<HTMLInputElement>) =>
          handleCvcNumberChange(e.target.value)
        }
        autoFocus
      />
    </CardFormFieldStyles>
  );
}
