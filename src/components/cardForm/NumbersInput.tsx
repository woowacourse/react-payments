import { useState, useRef } from "react";
import styled from "styled-components";
import { InputContainer, InputLabel, Input } from "../common";
import { isNumeric } from "../../utils/validate";
import { useFocusChain } from "../../hook/useFocusChain";
import { ERROR_MESSAGE, INPUT_FULL_LENGTH } from "../../constant/cardInput";

interface NumbersInputProps {
  setNumbers: (index: number, numbers: string) => void;
  validateNumbersInput: (numbers: string[]) => boolean;
}

const numbersInputInfo = {
  $width: "70px",
  $textPosition: "center",
};

export const NumbersInput = ({
  setNumbers,
  validateNumbersInput,
}: NumbersInputProps) => {
  const [inputValues, setInputValues] = useState(["", "", "", ""]);
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
        const onlyNumeric = value.match(/\d+/g)?.join("") || "";
        e.target.value = onlyNumeric;
        return;
      }

      if (value.length > INPUT_FULL_LENGTH.CARD_NUMBER) {
        e.target.value = value.slice(0, -1);
        return;
      }

      setInputValues((prev) => {
        const newNumbers = [...prev];
        newNumbers[index] = value;
        return newNumbers;
      });
      setNumbers(index, value);

      moveFocusToNext(index, value);
    };

  const validate = () => {
    const isEveryInputActivated = inputValues.every(
      (number) => number.length > 0
    );

    if (isEveryInputActivated) {
      const validity = validateNumbersInput(inputValues);
      setIsValid(validity);
    }
  };

  const eraseErrorMessage = () => {
    setIsValid(true);
  };

  return (
    <InputContainer>
      <InputLabel text="카드 번호" name="numbers" />
      <Row>
        <Input
          error={{
            isValid: isValid,
            errorMessage: ERROR_MESSAGE.CARD_NUMBERS,
          }}
          {...numbersInputInfo}
          type="text"
          label="number1"
          handleInput={handleInput(0)}
          handleOutFocus={validate}
          handleFocus={eraseErrorMessage}
          ref={allRefs[0]}
        />
        {[2, 3, 4].map((inputNumber) => (
          <Input
            key={inputNumber}
            {...numbersInputInfo}
            type={inputNumber < 3 ? "text" : "password"}
            label={`number${inputNumber}`}
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
