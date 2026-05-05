import { useState } from "react";
import styled from "@emotion/styled";
import { ErrorMessage } from "./ErrorMessage";
import { CARD_INPUT } from "../../Constants";
import { sanitizeErrors } from "../../../../Utils";
import { CardInput } from "./CardInput";
import { Validator } from "../../validators/CardValidator";

export function CardCVCInput() {
  const [cardCVC, setCardCVC] = useState("");

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
    <CardCVCContainer>
      <CardCVCLabel htmlFor="card-cvc-input">CVC</CardCVCLabel>
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
    </CardCVCContainer>
  );
}

const CardCVCContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const CardCVCLabel = styled.label`
  font-size: 12px;
`;
