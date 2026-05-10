import { CardInput } from "./CardInput";
import { CARD_INPUT } from "../../Constants";
import { Validator } from "../../validators/CardValidator";
import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { sanitizeErrors, runValidation } from "../../Utils";
import {
  CardInputLabel,
  CardInputFieldContainer,
} from "../../style/CardStyles";

interface CardPasswordInputProps {
  cardPassword: string;
  setCardPassword: (value: string) => void;
}

export default function CardPasswordInput({ cardPassword, setCardPassword }: CardPasswordInputProps) {
  const [isError, setError] = useState({
    state: false,
    message: "",
  });

  const changeCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const errorReport = runValidation([() => Validator.isNumber(value)]);
    setError(errorReport);
    if (errorReport.state) return;
    setCardPassword(value);
  };

  const handleBlurPassword = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setError(runValidation([() => Validator.isValidCardPassswordLength(value)]));
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
