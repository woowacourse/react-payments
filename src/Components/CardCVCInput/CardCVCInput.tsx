import React, { useState } from "react";
import Input from "../common/Input/Input";
import { Tooltip } from "../CardNumberInput/CardNumberInput.styles";

interface CardCVCInputProps {
  value: string;
  onChange: (value: string) => void;
}

const CardCVCInput: React.FC<CardCVCInputProps> = ({ value, onChange }) => {
  const [inputValues, setInputValues] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (inputValue: string) => {
    setInputValues(inputValue);
    onChange(inputValue);
  };

  const handleValidate = (isValid: boolean) => {
    setIsValid(isValid);
  };

  const validator = (value: string) => {
    if (!/^\d*$/.test(value)) {
      setIsValid(false);
      setErrorMessage("CVC 번호는 숫자만 입력 가능합니다.");
      return false;
    }

    if (value.length !== 2) {
      setIsValid(false);
      setErrorMessage("CVC 번호는 2자리여야 합니다.");
      return false;
    }

    setIsValid(true);
    setErrorMessage("");
    return true;
  };

  return (
    <>
      <Input
        value={inputValues}
        onChange={(inputValue) => handleChange(inputValue)}
        onValidate={(isValid) => handleValidate(isValid)}
        placeholder="123"
        size="large"
        maxLength={2}
        validator={(value) => validator(value)}
      />
      <Tooltip>{!isValid ? errorMessage : ""}</Tooltip>
    </>
  );
};

export default CardCVCInput;
