import { useState } from "react";

import Label from "../common/Label";
import Input from "../common/Input";

import styled from "styled-components";

interface CardNumberInputProps {
  inputCount: number;
  errorCaption: () => JSX.Element;
  handleCardNumberChange: (index: number, value: string) => void;
}

const CardNumberInput = ({
  inputCount,
  errorCaption,
  handleCardNumberChange,
}: CardNumberInputProps) => {
  const [inputErrors, setInputErrors] = useState<boolean[]>(
    Array.from<boolean>({ length: inputCount }).fill(false)
  );

  const handleInputChange = (index: number, value: string) => {
    const isError = !/^\d+$/.test(value);

    setInputErrors((errors) =>
      errors.map((error, errorIndex) =>
        index === errorIndex ? isError : error
      )
    );

    handleCardNumberChange(index, value);
  };

  const hasErrorInput = () => inputErrors.some((error) => error);

  return (
    <>
      <Label htmlFor="card-number">카드 번호</Label>
      <InputContainer>
        {Array.from({ length: inputCount }, (_, index) => (
          <Input
            id={index === 0 ? "card-number" : ""}
            key={`input-${index}`}
            size="small"
            type="text"
            placeholder="1234"
            maxLength={4}
            isError={inputErrors[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </InputContainer>
      {hasErrorInput() && errorCaption()}
    </>
  );
};

export default CardNumberInput;

const InputContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;
