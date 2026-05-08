import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { CARD_INPUT } from "../../Constants";
import { sanitizeErrors } from "../../../../Utils";
import { CardInput } from "./CardInput";
import { Validator } from "../../validators/CardValidator";
import {
  CardInputFieldContainer,
  CardInputLabel,
} from "../../style/CardStyles";

export function CardCVCInput({ cardCVC, setCardCVC }) {
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

  const changeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!runValidation([() => Validator.isNumber(value)])) return;
    setCardCVC(value);
  };

  const handleBlurCVC = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!runValidation([() => Validator.isValidCardCVCLength(value)])) return;
  };

  return (
    <CardInputFieldContainer>
      <CardInputLabel htmlFor="card-cvc-input">CVC</CardInputLabel>
      <CardInput
        type="text"
        maxLength={CARD_INPUT.CVC_LENGTH}
        placeholder="123"
        id="card-cvc-input"
        value={cardCVC}
        onChange={changeCardCVC}
        onBlur={handleBlurCVC}
      />
      <ErrorMessage messages={sanitizeErrors([isError["message"]])} />
    </CardInputFieldContainer>
  );
}
