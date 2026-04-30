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

  const validateMonth = (value: string, id: string) => {
    if (value.length === 1 && !["0", "1"].includes(value[0])) {
      setError({
        ...isError,
        [id]: { state: true },
        message: "유효하지 않은 날짜 형식입니다. 0 이나 1로 시작해야 합니다.",
      });
      return false;
    }
    if (value.length === 2) {
      const month = Number(value);
      if (month < 1 || month > 12) {
        setError({
          ...isError,
          [id]: { state: true },
          message:
            "유효하지 않은 날짜 형식입니다. 1 ~ 12 이내 숫자여야 합니다.",
        });
        return false;
      }
    }
    setError({ ...isError, [id]: { state: false }, message: "" });
    return true;
  };

  const validateYear = (value: string, id: string): boolean => {
    const currentYear = new Date().getFullYear().toString().slice(-2);
    const year = value;
    if (year.length === 2 && Number(year) < Number(currentYear)) {
      setError({
        ...isError,
        [id]: { state: true },
        message: "유효기간이 만료된 연도입니다.",
      });
      return false;
    }
    setError({ ...isError, [id]: { state: false }, message: "" });
    return true;
  };

  const validateIsNumber = (value: string, id: string): boolean => {
    if (Number.isNaN(Number(value))) {
      setError({
        ...isError,
        [id]: { state: true },
        message: "날짜는 숫자만 입력 가능합니다.",
      });
      return false;
    }
    setError({ ...isError, [id]: { state: false }, message: "" });
    return true;
  };

  const changeCardExpiryMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    if (!validateIsNumber(value, id)) return;
    if (!validateMonth(value, id)) return;
    setCardExpiryDate({ ...cardExpiryDate, [id]: value });
  };

  const changeCardExpiryYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    if (!validateIsNumber(value, id)) return;
    if (!validateYear(value, id)) return;
    setCardExpiryDate({ ...cardExpiryDate, [id]: value });
  };

  const validateCardExpiryDateLength = (
    value: string,
    id: string,
    limit: number,
  ): boolean => {
    if (![0, limit].includes(value.length)) {
      setError({
        ...isError,
        [id]: { state: true },
        message: "날짜 각 항목은 2자리여야 합니다.",
      });
      return false;
    }
    setError({ ...isError, [id]: { state: false }, message: "" });
    return true;
  };

  const handleBlurCardExpiryDate = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    if (!validateCardExpiryDateLength(value, id, e.target.maxLength)) return;
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
