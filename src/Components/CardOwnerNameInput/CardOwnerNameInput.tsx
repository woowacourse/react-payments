import React, { useEffect, useState } from "react";
import Input from "../common/Input/Input";
import { Tooltip } from "../CardNumberInput/CardNumberInput.styles";

interface CardOwnerNameInputProps {
  value: string;
  onChange: (value: string) => void;
  setCompleted: (isCompleted: boolean) => void;
}

const CardOwnerNameInput: React.FC<CardOwnerNameInputProps> = ({
  value,
  onChange,
  setCompleted,
}) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (inputValue: string) => {
    if (validator(inputValue)) {
      onChange(inputValue.toUpperCase());
    }
  };

  const handleValidate = (isValid: boolean) => {
    setIsValid(isValid);
  };

  const validator = (value: string) => {
    if (!/^[A-Za-z\s]*$/.test(value)) {
      setIsValid(false);
      setErrorMessage("카드 소유자 이름은 영어로만 입력해 주세요");
      return false;
    }

    setIsValid(true);
    setErrorMessage("");
    return true;
  };

  const handleEnter = () => {
    if (value && isValid) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  };

  return (
    <>
      <Input
        value={value}
        onChange={(inputValue) => handleChange(inputValue)}
        onValidate={(isValid) => handleValidate(isValid)}
        placeholder="JOHN DOE"
        size="large"
        validator={(value) => validator(value)}
        onEnter={handleEnter}
      />
      <Tooltip>{!isValid ? errorMessage : ""}</Tooltip>
    </>
  );
};

export default CardOwnerNameInput;
