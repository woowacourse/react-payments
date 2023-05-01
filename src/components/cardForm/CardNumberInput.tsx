import { useState, useRef } from "react";
import { InputContainer } from "../common/InputContainer";
import { InputLabel } from "../common/InputLabel";
import { Input } from "../common/Input";
import styled from "styled-components";
import { isNumeric } from "../../utils/validate";
import { useFocusChain } from "../../hook/useFocusChain";
import { ERROR_MESSAGE, INPUT_FULL_LENGTH } from "../../constant/cardInput";

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

  const allRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const { moveFocusToNext } = useFocusChain(
    allRefs,
    INPUT_FULL_LENGTH.CARD_NUMBER
  );

  const handleInput =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (!isNumeric(value)) {
        const onlyNumbers = value.match(/\d+/g)?.join("") || "";
        e.target.value = onlyNumbers;
        return;
      }

      if (value.length > INPUT_FULL_LENGTH.CARD_NUMBER) {
        e.target.value = value.slice(0, -1);
        return;
      }

      setNumbers((prev) => {
        const newNumbers = [...prev];
        newNumbers[index] = value;
        return newNumbers;
      });
      setCardNumbers(index, value);

      moveFocusToNext(index, value);
    };

  const validate = () => {
    const isEveryInputActivated = numbers.every((number) => number.length > 0);

    if (isEveryInputActivated) {
      const validity = validateNumbersInput(numbers);
      setIsValid(validity);
    }
  };

  const eraseErrorMessage = () => {
    setIsValid(true);
  };

  return (
    <InputContainer>
      <InputLabel text="카드 번호" name="cardNumber" />
      <Row>
        <Input
          error={{
            isValid: isValid,
            errorMessage: ERROR_MESSAGE.CARD_NUMBERS,
          }}
          {...cardNumberInputInfo}
          type="text"
          label="cardNumber1"
          handleInput={handleInput(0)}
          handleOutFocus={validate}
          handleFocus={eraseErrorMessage}
          ref={allRefs[0]}
        />
        {[2, 3, 4].map((inputNumber) => (
          <Input
            key={inputNumber}
            {...cardNumberInputInfo}
            type={inputNumber < 3 ? "text" : "password"}
            label={`cardNumber${inputNumber}`}
            handleInput={handleInput(inputNumber - 1)}
            handleOutFocus={validate}
            handleFocus={eraseErrorMessage}
            ref={allRefs[inputNumber - 1]}
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
