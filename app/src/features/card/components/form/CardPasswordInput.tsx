import { CardInput } from "./CardInput";
import { CARD_INPUT } from "../../Constants";
import { Validator } from "../../validators/CardValidator";
import { ErrorMessage } from "./ErrorMessage";
import useCardInputError from "../../hooks/useCardInputError";
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
  const [isError, handleChangeError, handleOnBlurError] = useCardInputError({
    state: false,
    message: "",
  });

  const changeCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const errorReport = handleChangeError([() => Validator.isNumber(value)]);
    if (errorReport.state) return;
    setCardPassword(value);
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
        onBlur={(e) =>
          handleOnBlurError([
            () => Validator.isValidCardPassswordLength(e.target.value),
          ])
        }
      />
      <ErrorMessage messages={sanitizeErrors([isError["message"]])} />
    </CardInputFieldContainer>
  );
}
