import { useState } from "react";
import styled from "@emotion/styled";
import { ErrorMessage } from "./ErrorMessage";

export function CardCVCInputWrapper() {
  const [cardCVC, setCardCVC] = useState("");

  const [isError, setError] = useState({
    state: false,
    message: "",
  });

  const validateIsNumber = (value: string, id: string): boolean => {
    if (Number.isNaN(Number(value))) {
      setError({
        ...isError,
        [id]: { state: true },
        message: "숫자만 입력 가능합니다.",
      });
      return false;
    }
    setError({ ...isError, [id]: { state: false }, message: "" });
    return true;
  };

  const changeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    if (!validateIsNumber(value, id)) return;
    setCardCVC(e.target.value);
  };

  const validateCVCLength = (
    value: string,
    id: string,
    limit: number,
  ): boolean => {
    if (![0, limit].includes(value.length)) {
      setError({
        ...isError,
        [id]: { state: true },
        message: "CVC는 3자리여야 합니다.",
      });
      return false;
    }
    setError({ ...isError, [id]: { state: false }, message: "" });
    return true;
  };

  const handleBlurCVC = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    if (!validateCVCLength(value, id, e.target.maxLength)) return;
  };

  return (
    <CardCVCContainer>
      <CardCVCLabel htmlFor="card-cvc-input">CVC</CardCVCLabel>
      <CardCVCInput
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

type ErrorFlag = {
  isError?: boolean;
};

const CardCVCContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const CardCVCLabel = styled.label`
  font-size: 12px;
`;

const CardCVCInput = styled.input<ErrorFlag>`
  border: solid 1px ${(props) => (props.isError ? "#FF3D3D" : "#acacac")};
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 11px;
  height: 32px;
  -moz-appearance: textfield;
  &::placeholder {
    color: #acacac;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
