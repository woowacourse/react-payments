import styled from "styled-components";
import InputExpiration from "./Input/InputExpiration";
import { useRef, useState } from "react";
import Validator from "../utils/Validator";

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorText = styled.h5`
  color: red;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 12px;
`;

interface Props {
  value: string;
  onChange: (value: string) => void;
}

function CardExpiration({ value, onChange }: Props) {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [focusedField, setFocusedField] = useState<"month" | "year" | null>(null);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const yearInputRef = useRef<HTMLInputElement>(null);

  const validateExpirationDate = (inputMonth: string, inputYear: string): boolean => {
    if (!inputMonth || !inputYear || inputYear.length !== 2) return true;
    
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Get last 2 digits
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-based
    
    const yearNum = parseInt(inputYear);
    const monthNum = parseInt(inputMonth);
    
    if (yearNum < currentYear || (yearNum === currentYear && monthNum < currentMonth)) {
      setIsError(true);
      setErrorMessage("만료된 카드입니다");
      // Clear the expired date
      setMonth("");
      setYear("");
      onChange("");
      return false;
    }
    return true;
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!Validator.isNumber(value)) {
      setIsError(true);
      setErrorMessage("숫자만 입력 가능합니다");
      return;
    }
    setIsError(false);
    setErrorMessage("");

    if (Number.parseInt(value) > 1 && value.length === 1) {
      const newValue = "0" + value;
      setMonth(newValue);
      if (validateExpirationDate(newValue, year)) {
        onChange(newValue + (year ? "/" + year : ""));
        yearInputRef.current?.focus();
      }
      return;
    }

    setMonth(value);
    if (value.length === 2 && Number.parseInt(value) > 12) {
      setIsError(true);
      setErrorMessage("월은 12 이하로 입력해주세요");
      return;
    }

    if (value.length === 2) {
      if (validateExpirationDate(value, year)) {
        onChange(value + (year ? "/" + year : ""));
        yearInputRef.current?.focus();
      }
    } else {
      onChange(value + (year ? "/" + year : ""));
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!Validator.isNumber(value)) {
      setIsError(true);
      setErrorMessage("숫자만 입력 가능합니다");
      return;
    }
    setIsError(false);
    setErrorMessage("");
    setYear(value);

    if (value.length === 2) {
      if (validateExpirationDate(month, value)) {
        onChange(month + "/" + value);
        yearInputRef.current?.blur();
      }
    } else {
      onChange(month + (value ? "/" + value : ""));
    }
  };

  return (
    <>
      <h2>카드 유효기간을 입력해 주세요</h2>
      <p>월/년도(MM/YY)를 순서대로 입력해 주세요.</p>
      <h4>유효기간</h4>
      <InputGroup>
        <InputExpiration
          name="month"
          value={month}
          placeholder="MM"
          onChange={handleMonthChange}
          onFocus={() => setFocusedField("month")}
          onBlur={() => setFocusedField(null)}
          isFocused={focusedField === "month"}
          isError={isError && focusedField === "month"}
        />
        <InputExpiration
          name="year"
          value={year}
          placeholder="YY"
          onChange={handleYearChange}
          inputRef={yearInputRef}
          onFocus={() => setFocusedField("year")}
          onBlur={() => setFocusedField(null)}
          isFocused={focusedField === "year"}
          isError={isError && focusedField === "year"}
        />
      </InputGroup>
      <ErrorText style={{ display: isError ? "block" : "none" }}>
        {errorMessage}
      </ErrorText>
    </>
  );
}

export default CardExpiration; 