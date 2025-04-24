import { ChangeEvent } from "react";
import {
  CARD_FORM_TYPE,
  MAX_LENGTH,
  PLACEHOLDER,
} from "../../../../constants/constants";
import { useCard } from "../../../../hooks/useCard";
import Input from "../../../Common/Input/Input";
import { CardFormFieldCSS } from "../CardFormFields.styled";
import { useCardValidation } from "../../../../hooks/useCardValidation";

export default function CardPasswordInput() {
  const { password, updatePassword } = useCard();
  const { passwordError, validatePassword } = useCardValidation();

  const handlePasswordChange = (value: string) => {
    validatePassword(value);
    updatePassword(value);
  };

  return (
    <CardFormFieldCSS>
      <Input
        key={CARD_FORM_TYPE.password}
        type="password"
        placeholder={PLACEHOLDER.password}
        maxLength={MAX_LENGTH.password}
        isError={passwordError.hasError}
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handlePasswordChange(e.target.value)
        }
        onBlur={(e: ChangeEvent<HTMLInputElement>) =>
          handlePasswordChange(e.target.value)
        }
      />
    </CardFormFieldCSS>
  );
}
