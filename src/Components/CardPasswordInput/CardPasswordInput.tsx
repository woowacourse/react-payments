import React, { useEffect, useState } from "react";
import Input from "../common/Input/Input";
import { Tooltip } from "../CardNumberInput/CardNumberInput.styles";

interface CardPasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  setCompleted: (isCompleted: boolean) => void;
}

const CardPasswordInput: React.FC<CardPasswordInputProps> = ({
  setCompleted,
}) => {
  const [inputValues, setInputValues] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (inputValue: string) => {
    setInputValues(inputValue);
  };

  const handleValidate = (isValid: boolean) => {
    setIsValid(isValid);
  };

  const validator = (value: string) => {
    if (!/^\d*$/.test(value)) {
      setIsValid(false);
      setErrorMessage("비밀번호는 숫자만 입력 가능합니다.");
      return false;
    }

    if (value.length !== 2) {
      setIsValid(false);
      setErrorMessage("비밀번호 2자리를 입력해 주세요.");
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
        placeholder="**"
        size="large"
        maxLength={2}
        validator={(value) => validator(value)}
        type="password"
      />
      <Tooltip>{!isValid ? errorMessage : ""}</Tooltip>
    </>
  );
};

export default CardPasswordInput;
