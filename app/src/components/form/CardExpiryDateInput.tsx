import styled from "@emotion/styled";
import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";

export function CardExpiryDateInputContainer({
  cardExpiryDate,
  setCardExpiryDate,
}) {
  const [isError, setError] = useState({
    "expiry-month": {
      state: false,
    },
    "expiry-year": {
      state: false,
    },
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
    } else {
      setError({ ...isError, [id]: { state: false }, message: "" });
    }
    return true;
  };

  const changeCardExpiryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    if (!validateIsNumber(value, id)) return;
    setCardExpiryDate({ ...cardExpiryDate, [id]: value });
  };

  return (
    <>
      <CardExpiryDateFieldset>
        <CardExpiryDateLegend>유효기간</CardExpiryDateLegend>
        <CardExpiryDateInput
          type="text"
          inputMode="numeric"
          id="expiry-month"
          onChange={changeCardExpiryDate}
          maxLength={2}
          value={cardExpiryDate["expiry-month"]}
          isError={isError["expiry-month"].state}
          placeholder="MM"
        />
        <CardExpiryDateInput
          type="text"
          inputMode="numeric"
          id="expiry-year"
          onChange={changeCardExpiryDate}
          maxLength={2}
          value={cardExpiryDate["expiry-year"]}
          isError={isError["expiry-year"].state}
          placeholder="YY"
        />
      </CardExpiryDateFieldset>
      <ErrorMessage message={isError["message"]} />
    </>
  );
}

type ErrorFlag = {
  isError?: boolean;
};

const CardExpiryDateFieldset = styled.fieldset`
  border: none;
  display: flex;
  gap: 0.625rem;
  padding: 0;
  margin: 0;
`;

const CardExpiryDateLegend = styled.legend`
  font-size: 12px;
  margin: 8px 0;
`;

const CardExpiryDateInput = styled.input<ErrorFlag>`
  border: solid 1px ${(props) => (props.isError ? "#FF3D3D" : "#acacac")};
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 11px;
  width: 100%;
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
