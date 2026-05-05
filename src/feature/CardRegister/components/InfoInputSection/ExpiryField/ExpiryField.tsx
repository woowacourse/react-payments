import { useState } from "react";
import Label from "../../../../../common/components/Label/Label";
import Input from "../../../../../common/components/Input/Input";
import styled from "styled-components";
import {
  validateExceedTwoDigits,
  validateMonth,
  validateNumericInput,
  validateTwoDigits,
} from "../../../validators/expiryDate";

const ExpiryField = ({
  expiryMonth,
  expiryYear,
  setExpiryMonth,
  setExpiryYear,
  onErrorChange,
}: {
  expiryMonth: string;
  expiryYear: string;
  setExpiryMonth: (value: string) => void;
  setExpiryYear: (value: string) => void;
  onErrorChange: (value: boolean) => void;
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

    if (!validateNumericInput(value)) {
      return;
    }
    if (validateExceedTwoDigits(value)) {
      return;
    }

    if (value.length === 2 && !validateMonth(value)) {
      updateErrorInfo(index, true, "월은 01~12 사이로 입력해주세요.");
      return;
    }

    setExpiryMonth(value);

    if (isTouched[index] && value.length === 2) {
      updateErrorInfo(index, false);
    }
  };

  const handleYearChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!validateNumericInput(value)) return;
    if (validateExceedTwoDigits(value)) return;

    setExpiryYear(value);

    if (isTouched[index] && value.length === 2) {
      updateErrorInfo(index, false);
    }
  };

  const handleExpiryBlur = (
    index: number,
    eValue: string,
    expiryType: "month" | "year",
  ) => {
    updateTouched(index);

    const filledNumber = fillZero(eValue, expiryType);

    if (expiryType === "month") {
      setExpiryMonth(filledNumber);
    }
    if (expiryType === "year") {
      setExpiryYear(filledNumber);
    }

    updateErrorInfo(index, !validateTwoDigits(filledNumber));
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

    return value;
  };

  const updateTouched = (index: number) => {
    setIsTouched((prev) =>
      prev.map((touched, i) => (i === index ? true : touched)),
    );
  };

  const updateErrorInfo = (
    index: number,
    hasError: boolean,
    errorMessage = "2자리를 입력해 주세요",
  ) => {
    const newFlag = errorInfo.flag.map((flag, i) =>
      i === index ? hasError : flag,
    );
    const firstErrorIdx = newFlag.indexOf(true);

    setErrorInfo({
      flag: newFlag,
      currentErrorMsg: firstErrorIdx === -1 ? "" : errorMessage,
    });
    onErrorChange(firstErrorIdx !== -1);
  };

  const firstErrorIdx = errorInfo.flag.indexOf(true);

  return (
    <StyledField>
      <Label value="유효기간" htmlFor="expiry" />
      <InputWrapper>
        <ExpiryInput
          id="expiry"
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
