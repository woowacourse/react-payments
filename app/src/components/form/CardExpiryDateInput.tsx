import styled from "@emotion/styled";
import { Validator } from "../../validators/CardValidator";
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

  const changeCardExpiryMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    try {
      Validator.isNumber(value);
      Validator.isValidMonth(value);
      setError({ ...isError, [id]: { state: false }, message: "" });
    } catch (err) {
      setError({ ...isError, [id]: { state: true }, message: err.message });
    }
    setCardExpiryDate({ ...cardExpiryDate, [id]: value });
  };

  const changeCardExpiryYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    try {
      Validator.isNumber(value);
      Validator.isValidYear(value);
      setError({ ...isError, [id]: { state: false }, message: "" });
    } catch (err) {
      setError({ ...isError, [id]: { state: true }, message: err.message });
    }
    setCardExpiryDate({ ...cardExpiryDate, [id]: value });
  };

  const handleBlurCardExpiryDate = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    try {
      Validator.isValidCardExpiryDateLength(value, e.target.maxLength);
      setError({ ...isError, [id]: { state: false }, message: "" });
    } catch (err) {
      setError({ ...isError, [id]: { state: true }, message: err.message });
    }
  };

  return (
    <>
      <CardExpiryDateFieldset>
        <CardExpiryDateLegend>유효기간</CardExpiryDateLegend>
        <CardExpiryDateInput
          type="text"
          inputMode="numeric"
          id="expiry-month"
          onChange={changeCardExpiryMonth}
          onBlur={handleBlurCardExpiryDate}
          maxLength={2}
          value={cardExpiryDate["expiry-month"]}
          isError={isError["expiry-month"].state}
          placeholder="MM"
        />
        <CardExpiryDateInput
          type="text"
          inputMode="numeric"
          id="expiry-year"
          onChange={changeCardExpiryYear}
          onBlur={handleBlurCardExpiryDate}
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
