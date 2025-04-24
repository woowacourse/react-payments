import { ChangeEvent } from "react";
import { CARD_FORM_TYPE } from "../../../../constants/constants";
import { useCard } from "../../../../hooks/useCard";
import Input from "../../../Common/Input/Input";
import { CardFormFieldCSS } from "../CardFormFields.styled";
import { useCardValidation } from "../../../../hooks/useCardValidation";

const PLACEHOLDERS = "123";
const MAX_LENGTHS = 3;

export default function CardCvcInput() {
  const { cvcNumber, updateCvcNumber } = useCard();
  const { cvcNumberError, validateCvcNumber } = useCardValidation();

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
        isError={cvcNumberError.hasError}
        value={cvcNumber}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleCvcNumberChange(e.target.value)
        }
      />
    </CardFormFieldCSS>
  );
}
