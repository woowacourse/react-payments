import React, { useEffect, useState } from "react";
import Input from "../common/Input/Input";
import { Tooltip } from "../CardNumberInput/CardNumberInput.styles";

interface CardCVCInputProps {
  value: string;
  onChange: (value: string) => void;
  setCompleted: (isCompleted: boolean) => void;
  handleOnBlur: () => void;
  handleOnFocus: () => void;
}

const CardCVCInput: React.FC<CardCVCInputProps> = ({
  value,
  onChange,
  setCompleted,
  handleOnBlur,
  handleOnFocus,
}) => {
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

    if (value.length !== 3) {
      setIsValid(false);
      setErrorMessage("CVC 번호는 3자리여야 합니다.");
      return false;
    }

    setIsValid(true);
    setErrorMessage("");
    return true;
  };

  useEffect(() => {
    if (inputValues && isValid) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  }, [inputValues, isValid]);

  return (
    <>
      <Input
        value={inputValues}
        onChange={(inputValue) => handleChange(inputValue)}
        onValidate={(isValid) => handleValidate(isValid)}
        placeholder="123"
        size="large"
        maxLength={3}
        validator={(value) => validator(value)}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      />
      <Tooltip>{!isValid ? errorMessage : ""}</Tooltip>
    </>
  );
};

export default CardCVCInput;
