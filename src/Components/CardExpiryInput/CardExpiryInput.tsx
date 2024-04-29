import React, { useEffect, useRef, useState } from "react";
import { ExpiryInputWrapper } from "./CardExpiryInput.styles";
import Input from "../common/Input/Input";
import { Tooltip } from "../CardNumberInput/CardNumberInput.styles";

interface CardExpiryInputProps {
  month: string;
  year: string;
  onMonthChange: (value: string) => void;
  onYearChange: (value: string) => void;
  setExpiryMonthCompleted: (isCompletd: boolean) => void;
  setExpiryYearCompleted: (isCompletd: boolean) => void;
}

const CardExpiryInput: React.FC<CardExpiryInputProps> = ({
  month,
  year,
  onMonthChange,
  onYearChange,
  setExpiryMonthCompleted,
  setExpiryYearCompleted,
}) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleValidate = (isValid: boolean) => {
    setIsValid(isValid);
  };

  const handleMonthChange = (inputValue: string) => {
    onMonthChange(inputValue);

    if (inputValue.length === 2) {
      inputRefs.current[1]?.focus();
    }
  };

  const handleYearChange = (inputValue: string) => {
    onYearChange(inputValue);
  };

  const monthValidator = (value: string) => {
    if (!/^\d*$/.test(value)) {
      setIsValid(false);
      setErrorMessage("유효 기간은 숫자만 입력 가능합니다.");
      return false;
    }

    if (Number(value) > 12) {
      setIsValid(false);
      setErrorMessage("달은 12까지만 가능합니다.");
      return false;
    }

    setIsValid(true);
    setErrorMessage("");
    return true;
  };

  useEffect(() => {
    if (isValid && month && year) {
      setExpiryMonthCompleted(true);
      setExpiryYearCompleted(true);
    } else {
      setExpiryMonthCompleted(false);
      setExpiryYearCompleted(false);
    }
  }, [isValid, month, year]);

  const yearValidator = (value: string) => {
    const currentYear = Number(new Date().getFullYear().toString().slice(2));

    if (!/^\d*$/.test(value)) {
      setIsValid(false);
      setErrorMessage("유효 기간은 숫자만 입력 가능합니다.");
      return false;
    }

    if (Number(value) < currentYear) {
      setIsValid(false);
      setErrorMessage(`${currentYear}년 이후만 가능합니다.`);
      return false;
    }

    setIsValid(true);
    setErrorMessage("");
    return true;
  };

  return (
    <>
      <ExpiryInputWrapper>
        <Input
          ref={(el) => (inputRefs.current[0] = el)}
          value={month}
          onChange={(month) => handleMonthChange(month)}
          onValidate={(isValid) => handleValidate(isValid)}
          maxLength={2}
          placeholder="MM"
          size="medium"
          validator={(value) => monthValidator(value)}
        />
        <Input
          ref={(el) => (inputRefs.current[1] = el)}
          value={year}
          onChange={(year) => handleYearChange(year)}
          onValidate={(isValid) => handleValidate(isValid)}
          maxLength={2}
          placeholder="YY"
          size="medium"
          validator={(value) => yearValidator(value)}
        />
      </ExpiryInputWrapper>
      <Tooltip>{!isValid ? errorMessage : ""}</Tooltip>
    </>
  );
};

export default CardExpiryInput;
