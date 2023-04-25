import { useState } from "react";
import { InputContainer } from "../common/InputContainer";
import { InputLabel } from "../common/InputLabel";
import { Input } from "../common/Input";
import styled from "styled-components";
import { CARD_INPUT_NUMBER } from "../../constant/cardInput";
import { isNumeric } from "../../utils/validate";

interface CardNumberInputProps {
  setCardNumbers: (index: number, numbers: string) => void;
  validateNumbersInput: (numbers: string[]) => boolean;
}

const cardNumberInputInfo = {
  $width: "70px",
  $textPosition: "center",
};

export const CardNumberInput = ({
  setCardNumbers,
  validateNumbersInput,
}: CardNumberInputProps) => {
  const [numbers, setNumbers] = useState(["", "", "", ""]);
  const [isValid, setIsValid] = useState(true);

  const handleInput =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (!isNumeric(value)) {
        const onlyNumbers = value.match(/\d+/g)?.join("") || "";
        e.target.value = onlyNumbers;
        return;
      }

      if (value.length > CARD_INPUT_NUMBER.CARD_NUMBER) {
        e.target.value = value.slice(0, -1);
        return;
      }

      setNumbers((prev) => {
        const newNumbers = [...prev];
        newNumbers[index - 1] = value;
        return newNumbers;
      });
      setCardNumbers(index - 1, value);
    };

  const handleOutFocusEvent = () => {
    const validity = validateNumbersInput(numbers);
    setIsValid(validity);
  };

  return (
    <InputContainer>
      <InputLabel text="카드 번호" name="cardNumber" />
      <Row>
        <Input
          error={{
            isValid: isValid,
            errorMessage: "16자리 숫자를 입력하세요.",
          }}
          {...cardNumberInputInfo}
          type="text"
          label="cardNumber1"
          handleInput={handleInput(1)}
          handleChange={() => {}}
        />
        {[2, 3, 4].map((ind) => (
          <Input
            {...cardNumberInputInfo}
            type={ind < 3 ? "text" : "password"}
            label={`cardNumber${ind}`}
            handleInput={handleInput(ind)}
            handleChange={handleOutFocusEvent}
          />
        ))}
      </Row>
    </InputContainer>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;
