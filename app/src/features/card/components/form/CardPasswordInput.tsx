import { CardInput } from "./CardInput";
import { CARD_INPUT } from "../../Constants";
import { Validator } from "../../validators/CardValidator";
import { ErrorMessage } from "./ErrorMessage";
import useValidatedInput from "../../hooks/useValidatedInput";
import { sanitizeErrors } from "../../Utils";
import {
  CardInputLabel,
  CardInputFieldContainer,
} from "../../style/CardStyles";

interface CardPasswordInputProps {
  cardPassword: string;
  setCardPassword: (value: string) => void;
}

export default function CardPasswordInput({
  cardPassword,
  setCardPassword,
}: CardPasswordInputProps) {
  const { isError, onChange, onBlur } = useValidatedInput({
    setValue: setCardPassword,
    changeValidators: (value: string) => [() => Validator.isNumber(value)],
    blurValidators: (value: string) => [
      () => Validator.isValidCardCVCLength(value),
    ],
  });

  return (
    <CardInputFieldContainer>
      <CardInputLabel>비밀번호 앞 2자리</CardInputLabel>
      <CardInput
        type="text"
        maxLength={CARD_INPUT.PASSWORD_LENGTH}
        placeholder="비밀번호"
        value={cardPassword}
        onChange={onChange}
        onBlur={onBlur}
      />
      <ErrorMessage messages={sanitizeErrors([isError["message"]])} />
    </CardInputFieldContainer>
  );
}
