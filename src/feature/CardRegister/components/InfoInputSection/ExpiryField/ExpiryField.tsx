import { useState } from "react";
import Label from "../../../../../common/components/Label/Label";
import Input from "../../../../../common/components/Input/Input";
import styled from "styled-components";

const ExpiryField = ({
  expiryMonth,
  expiryYear,
  setExpiryMonth,
  setExpiryYear,
  setIsError,
}: {
  expiryMonth: string;
  expiryYear: string;
  setExpiryMonth: (value: string) => void;
  setExpiryYear: (value: string) => void;
  setIsError: (value: boolean) => void;
}) => {
  const INPUT_COUNT = 2;
  const createFlags = () => Array.from({ length: INPUT_COUNT }, () => false);

  const [errorInfo, setErrorInfo] = useState({
    flag: createFlags(),
    currentErrorMsg: "",
  });
  const [isTouched, setIsTouched] = useState(createFlags());

  const handleMonthChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!/^\d*$/.test(value)) return;
    if (value.length > 2) return;

    if (value.length === 0) {
      setExpiryMonth("");
      return;
    }

    if (value.length === 2 && !isValidMonth(value)) return;

    setExpiryMonth(value);
    clearErrorWhenComplete(index, value);
  };

  const handleYearChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!/^\d*$/.test(value)) return;
    if (value.length > 2) return;

    setExpiryYear(value);
    clearErrorWhenComplete(index, value);
  };
  const ERROR_MSG = "2자리를 입력해 주세요";

  const isValidMonth = (value: string) => {
    const month = Number(value);

    return month >= 1 && month <= 12;
  };

  const fillZero = (value: string, expiryType: "month" | "year") => {
    if (expiryType === "month") {
      if (value.length === 1 && value !== "0") {
        return `0${value}`;
      }
    }

    if (expiryType === "year") {
      if (value.length === 1) {
        return `0${value}`;
      }
    }
  };

  const updateTouched = (index: number) => {
    setIsTouched((prev) =>
      prev.map((touched, i) => (i === index ? true : touched)),
    );
  };

  const clearErrorWhenComplete = (index: number, value: string) => {
    if (!isTouched[index] || value.length !== 2) return;

    updateErrorInfo(index, false);
  };

  const updateErrorInfo = (index: number, hasError: boolean) => {
    const newFlag = errorInfo.flag.map((flag, i) =>
      i === index ? hasError : flag,
    );
    const firstErrorIdx = newFlag.indexOf(true);

    setErrorInfo({
      flag: newFlag,
      currentErrorMsg: firstErrorIdx === -1 ? "" : ERROR_MSG,
    });
    setIsError(firstErrorIdx !== -1);
  };

  const validateError = (index: number, eValue: string) => {
    const isValid = eValue.length === 2;

    updateErrorInfo(index, !isValid);
  };

  const handleExpiryBlur = (
    index: number,
    eValue: string,
    expiryType: "month" | "year",
  ) => {
    updateTouched(index);

    const filledNumber = fillZero(eValue, expiryType);
    if (!filledNumber) {
      validateError(index, eValue);
      return;
    }

    if (expiryType === "month") {
      setExpiryMonth(filledNumber);
    }
    if (expiryType === "year") {
      setExpiryYear(filledNumber);
    }

    validateError(index, filledNumber);
  };

  const firstErrorIdx = errorInfo.flag.indexOf(true);

  return (
    <StyledField>
      <Label value="유효기간" />
      <InputWrapper>
        <ExpiryInput
          value={expiryMonth}
          maxLength={2}
          inputMode="numeric"
          placeholder="MM"
          strokeMode={0 === firstErrorIdx ? "error" : "default"}
          onChange={(e) => handleMonthChange(0, e.target.value)}
          onBlur={(e) => handleExpiryBlur(0, e.target.value, "month")}
        />
        <ExpiryInput
          value={expiryYear}
          maxLength={2}
          placeholder="YY"
          inputMode="numeric"
          strokeMode={1 === firstErrorIdx ? "error" : "default"}
          onChange={(e) => handleYearChange(1, e.target.value)}
          onBlur={(e) => handleExpiryBlur(1, e.target.value, "year")}
        />
      </InputWrapper>

      <ErrorMessage>{errorInfo.currentErrorMsg}</ErrorMessage>
    </StyledField>
  );
};

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 12px;

  width: 100%;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`;

const ExpiryInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;

const ErrorMessage = styled.span`
  min-height: 20px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;

export default ExpiryField;
