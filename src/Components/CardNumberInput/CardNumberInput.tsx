import React, { useState } from "react";
import Input from "../common/Input/Input";
import { CardNumberInputWrapper, Dd, Tooltip } from "./CardNumberInput.styles";

interface CardNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

const CardNumberInput: React.FC<CardNumberInputProps> = ({
  value,
  onChange,
}) => {
  const [inputValues, setInputValues] = useState<string[]>(Array(4).fill(""));
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (index: number, inputValue: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = inputValue;
    setInputValues(newInputValues);
    onChange(newInputValues.join(" "));
  };

  const handleValidate = (index: number, isValid: boolean) => {
    setIsValid(isValid);
  };

  const validator = (value: string) => {
    if (!/^\d*$/.test(value)) {
      setIsValid(false);
      setErrorMessage("카드 번호는 숫자만 입력 가능합니다.");
      return false;
    }

    if (value.length !== 4) {
      setIsValid(false);
      setErrorMessage("카드 번호는 4자리여야합니다.");
      return false;
    }

    setIsValid(true);
    setErrorMessage("");
    return true;
  };

  return (
    <CardNumberInputWrapper>
      <Dd>
        {[0, 1, 2, 3].map((index) => (
          <div key={index}>
            <Input
              value={inputValues[index]}
              onChange={(inputValue) => handleChange(index, inputValue)}
              onValidate={(isValid) => handleValidate(index, isValid)}
              maxLength={4}
              size="small"
              validator={(value) => validator(value)}
            />
          </div>
        ))}
      </Dd>

      <Tooltip>{!isValid ? errorMessage : ""}</Tooltip>
    </CardNumberInputWrapper>
  );
};

export default CardNumberInput;
