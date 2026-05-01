import { useState } from "react";
import styled from "@emotion/styled";
import { ErrorMessage } from "./ErrorMessage";
import { CardInput } from "../../style/CardStyles";
import { Validator } from "../../validators/CardValidator";

export function CardCVCInput() {
  const [cardCVC, setCardCVC] = useState("");

  const [isError, setError] = useState({
    state: false,
    message: "",
  });

  const changeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    try {
      Validator.isNumber(value);
      setError({ ...isError, [id]: { state: false }, message: "" });
      setCardCVC(e.target.value);
    } catch (err) {
      setError({ ...isError, [id]: { state: true }, message: (err as Error).message });
    }
  };

  const handleBlurCVC = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    try {
      Validator.isValidCardCVCLength(value, e.target.maxLength);
      setError({ ...isError, [id]: { state: false }, message: "" });
    } catch (err) {
      setError({ ...isError, [id]: { state: true }, message: (err as Error).message });
    }
  };

  return (
    <CardCVCContainer>
      <CardCVCLabel htmlFor="card-cvc-input">CVC</CardCVCLabel>
      <CardInput
        type="text"
        maxLength={3}
        inputMode="numeric"
        placeholder="123"
        id="card-cvc-input"
        value={cardCVC}
        onChange={changeCardCVC}
        onBlur={handleBlurCVC}
      />
      <ErrorMessage message={isError["message"]} />
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
