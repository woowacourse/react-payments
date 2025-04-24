import { ChangeEvent } from "react";
import { CARD_FORM_TYPE } from "../../../../constants/constants";
import { useCard } from "../../../../hooks/useCard";
import Input from "../../../Common/Input/Input";
import { CardFormFieldCSS } from "../CardFormFields.styled";
import { useCardValidation } from "../../../../hooks/useCardValidation";

const PLACEHOLDER = "비밀번호를 입력해 주세요";
const MAX_LENGTHS = 2;

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
        placeholder={PLACEHOLDER}
        maxLength={MAX_LENGTHS}
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
