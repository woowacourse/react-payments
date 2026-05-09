import { useRef, useState } from "react";
import Label from "../../../../../common/components/Label/Label";
import Input from "../../../../../common/components/Input/Input";
import styled from "styled-components";
import {
  validateExceedTwoDigits,
  validateMonth,
  validateTwoDigits,
} from "../../../validators/expiryDate";
import {
  ERROR_MESSAGES,
  EXPIRY_INPUT_COUNT,
  EXPIRY_VALUE_LENGTH,
} from "../../../constants";
import {
  formatExpiryValue,
  type ExpiryType,
} from "../../../utils/expiryFormatter";
import { validateNumericInput } from "../../../validators/input";

const ExpiryField = ({
  expiryMonth,
  expiryYear,
  setExpiryMonth,
  setExpiryYear,
}: {
  expiryMonth: string;
  expiryYear: string;
  setExpiryMonth: (value: string) => void;
  setExpiryYear: (value: string) => void;
}) => {
  const [errorInfo, setErrorInfo] = useState(
    Array.from({ length: EXPIRY_INPUT_COUNT }, () => ""),
  );
  const [isTouched, setIsTouched] = useState(
    Array.from({ length: EXPIRY_INPUT_COUNT }, () => false),
  );

  const inputFocusRefs = useRef<Array<HTMLInputElement | null>>(
    Array.from({ length: EXPIRY_INPUT_COUNT }, () => null),
  );

  const handleMonthChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!validateNumericInput(value)) {
      return;
    }
    if (validateExceedTwoDigits(value)) {
      return;
    }

    if (value.length === EXPIRY_VALUE_LENGTH && !validateMonth(value)) {
      const newErrorInfo = errorInfo.map((message, errorIndex) =>
        errorIndex === index ? ERROR_MESSAGES.expiryMonthRange : message,
      );
      setErrorInfo(newErrorInfo);
      return;
    }

    setExpiryMonth(value);

    if (isTouched[index] && value.length === EXPIRY_VALUE_LENGTH) {
      const newErrorInfo = errorInfo.map((message, errorIndex) =>
        errorIndex === index ? "" : message,
      );
      setErrorInfo(newErrorInfo);
    }

    // 다음 포커싱
    if (value.length === EXPIRY_VALUE_LENGTH) {
      inputFocusRefs.current[index + 1]?.focus();
    }
  };

  const handleYearChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!validateNumericInput(value)) {
      return;
    }
    if (validateExceedTwoDigits(value)) {
      return;
    }

    setExpiryYear(value);

    if (isTouched[index] && value.length === EXPIRY_VALUE_LENGTH) {
      const newErrorInfo = errorInfo.map((message, errorIndex) =>
        errorIndex === index ? "" : message,
      );
      setErrorInfo(newErrorInfo);
    }

    // 이전 포커싱
    if (value.length === 0) {
      inputFocusRefs.current[index - 1]?.focus();
    }
  };

  const handleExpiryBlur = (
    index: number,
    eValue: string,
    expiryType: ExpiryType,
  ) => {
    updateTouched(index);

    const formattedValue = formatExpiryValue(eValue, expiryType);

    if (expiryType === "month") {
      setExpiryMonth(formattedValue);
    }
    if (expiryType === "year") {
      setExpiryYear(formattedValue);
    }

    const newErrorInfo = errorInfo.map((message, errorIndex) => {
      if (errorIndex !== index) {
        return message;
      }

      if (!validateTwoDigits(formattedValue)) {
        return ERROR_MESSAGES.expiryLength;
      }

      if (expiryType === "month" && !validateMonth(formattedValue)) {
        return ERROR_MESSAGES.expiryMonthRange;
      }

      return "";
    });
    setErrorInfo(newErrorInfo);
  };

  const updateTouched = (index: number) => {
    setIsTouched((prev) =>
      prev.map((touched, i) => (i === index ? true : touched)),
    );
  };

  const firstErrorIndex = errorInfo.findIndex((message) => message !== "");

  return (
    <StyledField>
      <Label htmlFor="expiry-month">유효기간</Label>
      <InputWrapper>
        <ExpiryInput
          ref={(node) => {
            inputFocusRefs.current[0] = node;
          }}
          id="expiry-month"
          value={expiryMonth}
          maxLength={EXPIRY_VALUE_LENGTH}
          inputMode="numeric"
          placeholder="MM"
          strokeMode={0 === firstErrorIndex ? "error" : "default"}
          onChange={(e) => handleMonthChange(0, e.target.value)}
          onBlur={(e) => handleExpiryBlur(0, e.target.value, "month")}
          autoFocus
        />
        <ExpiryInput
          ref={(node) => {
            inputFocusRefs.current[1] = node;
          }}
          id="expiry-month"
          value={expiryYear}
          maxLength={EXPIRY_VALUE_LENGTH}
          placeholder="YY"
          inputMode="numeric"
          strokeMode={1 === firstErrorIndex ? "error" : "default"}
          onChange={(e) => handleYearChange(1, e.target.value)}
          onBlur={(e) => handleExpiryBlur(1, e.target.value, "year")}
        />
      </InputWrapper>

      <ErrorMessage>{errorInfo[firstErrorIndex]}</ErrorMessage>
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
