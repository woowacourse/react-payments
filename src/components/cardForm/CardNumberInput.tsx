import { InputContainer } from "../common/InputContainer";
import { InputLabel } from "../common/InputLabel";
import { Input } from "../common/Input";
import { useState } from "react";
import styled from "styled-components";

interface CardNumberInputProps {
  setCardNumbers: (index: number, numbers: string) => void;
}

const cardNumberInputInfo = {
  width: "80px",
  maxLength: 4,
  textPosition: "center",
  type: "text",
};

export const CardNumberInput = ({ setCardNumbers }: CardNumberInputProps) => {
  const [isCompleted, setIsCompleted] = useState(true);

  const handleInput =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (value.length > 4) {
        e.target.value = value.slice(0, 4);
        return;
      }

      setCardNumbers(index, value);
    };

  const handleOutFocusEvent = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsCompleted(false);

    if (e.target.value.length === 4) {
      setIsCompleted(true);
    }
  };

  return (
    <InputContainer>
      <InputLabel text="카드 번호" name="cardNumber" />
      <Row>
        <Input
          error={{
            isValid: isCompleted,
            errorMessage: "16자리 숫자를 입력하세요.",
          }}
          {...cardNumberInputInfo}
          label="cardNumber1"
          handleInput={handleInput(0)}
          handleChange={handleOutFocusEvent}
        />
        <Input
          {...cardNumberInputInfo}
          label="cardNumber2"
          handleInput={handleInput(1)}
          handleChange={handleOutFocusEvent}
        />
        <Input
          {...cardNumberInputInfo}
          label="cardNumber3"
          type="password"
          handleInput={handleInput(2)}
          handleChange={handleOutFocusEvent}
        />
        <Input
          {...cardNumberInputInfo}
          label="cardNumber4"
          type="password"
          handleInput={handleInput(3)}
          handleChange={handleOutFocusEvent}
        />
      </Row>
    </InputContainer>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
