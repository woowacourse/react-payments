import { ErrorMessage } from "./ErrorMessage";
import { CARD_INPUT } from "../../Constants";
import { sanitizeErrors } from "../../Utils";
import { CardInput } from "./CardInput";
import useValidatedInput from "../../hooks/useValidatedInput";
import { Validator } from "../../validators/CardValidator";
import { FIELD_ERROR_CODES } from "../../Constants";
import { errorCodeToErrorMessage } from "../../Converter";
import {
  CardInputFieldContainer,
  CardInputLabel,
} from "../../style/CardStyles";

interface CardCVCInputProps {
  cardCVC: string;
  setCardCVC: (value: string) => void;
  formErrorCodes: string[];
}

export function CardCVCInput({
  cardCVC,
  setCardCVC,
  formErrorCodes,
}: CardCVCInputProps) {
  const { isError, onChange, onBlur } = useValidatedInput({
    setValue: setCardCVC,
    changeValidators: (value: string) => [() => Validator.isNumber(value)],
    blurValidators: (value: string) => [
      () => Validator.isValidCardCVCLength(value),
    ],
  });

  const formErrorMessages = errorCodeToErrorMessage(
    formErrorCodes,
    FIELD_ERROR_CODES.cardCVC,
  );

  return (
    <CardInputFieldContainer>
      <CardInputLabel htmlFor="card-cvc-input">CVC</CardInputLabel>
      <CardInput
        type="text"
        maxLength={CARD_INPUT.CVC_LENGTH}
        placeholder="123"
        id="card-cvc-input"
        value={cardCVC}
        onChange={onChange}
        onBlur={onBlur}
      />
      <ErrorMessage
        messages={sanitizeErrors([...formErrorMessages, isError["message"]])}
      />
    </CardInputFieldContainer>
  );
}
