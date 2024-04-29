import React, { useEffect, useRef, useState } from "react";
import Input from "../common/Input/Input";
import {
  CardNumberInputWrapper,
  InputGroup,
  Tooltip,
} from "./CardNumberInput.styles";

interface CardNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  setCompleted: (isValid: boolean) => void;
}

const CardNumberInput: React.FC<CardNumberInputProps> = ({
  onChange,
  setCompleted,
}) => {
  const [inputValues, setInputValues] = useState<string[]>(Array(4).fill(""));
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (index: number, inputValue: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = inputValue;
    setInputValues(newInputValues);
    onChange(newInputValues.join(" "));

    if (inputValue.length === 4 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleValidate = (_: number, isValid: boolean) => {
    setIsValid(isValid);
  };

  const validator = (value: string) => {
    if (!/^\d*$/.test(value)) {
      setErrorMessage("카드 번호는 숫자만 입력 가능합니다.");
      return false;
    }

    if (value.length !== 4) {
      setErrorMessage("카드 번호는 4자리여야 합니다.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  useEffect(() => {
    const isCompleted = inputValues.join("").length === 16 && isValid;
    setCompleted(isCompleted);
  }, [inputValues, isValid]);

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  return (
    <CardNumberInputWrapper>
      <InputGroup>
        {[0, 1, 2, 3].map((index) => (
          <div key={index}>
            <Input
              ref={(el) => (inputRefs.current[index] = el)}
              value={inputValues[index]}
              onChange={(inputValue) => handleChange(index, inputValue)}
              onValidate={(isValid) => handleValidate(index, isValid)}
              maxLength={4}
              size="small"
              validator={(value) => validator(value)}
            />
          </div>
        ))}
      </InputGroup>

      <Tooltip>{!isValid ? errorMessage : ""}</Tooltip>
    </CardNumberInputWrapper>
  );
};

export default CardNumberInput;
