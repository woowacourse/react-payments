import { CardInput } from "./CardInput";
import { CARD_INPUT } from "../../Constants";
import { Validator } from "../../validators/CardValidator";
import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { sanitizeErrors } from "../../../../Utils";
import {
  CardInputLabel,
  CardInputFieldContainer,
} from "../../style/CardStyles";

export default function CardPasswordInput() {
  const [cardPassword, setCardPassword] = useState("");

  const [isError, setError] = useState({
    state: false,
    message: "",
  });

  const runValidation = (validators: (() => void)[]): boolean => {
    try {
      validators.forEach((validate) => {
        validate();
      });
      setError({ state: false, message: "" });
      return true;
    } catch (err) {
      setError({ state: true, message: (err as Error).message });
      return false;
    }
  };

  const changeCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!runValidation([() => Validator.isNumber(value)])) return;
    setCardPassword(value);
  };

  const handleBlurPassword = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!runValidation([() => Validator.isValidCardPassswordLength(value)]))
      return;
  };

  return (
    <CardInputFieldContainer>
      <CardInputLabel>비밀번호 앞 2자리</CardInputLabel>
      <CardInput
        type="text"
        maxLength={CARD_INPUT.PASSWORD_LENGTH}
        placeholder="비밀번호"
        value={cardPassword}
        onChange={changeCardPassword}
        onBlur={handleBlurPassword}
      />
      <ErrorMessage messages={sanitizeErrors([isError["message"]])} />
    </CardInputFieldContainer>
  );
}
