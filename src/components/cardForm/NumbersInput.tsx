import { useState } from "react";
import styled from "styled-components";
import { InputContainer, InputLabel, Input } from "../common";
import { isNumeric } from "../../utils/validate";
import { useInputFocusChain } from "../../hook/useInputFocusChain";
import { ERROR_MESSAGE, INPUT_FULL_LENGTH } from "../../constant/cardInput";
import { useError } from "../../hook/useError";

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
  const { isError, setErrorState, removeError } = useError();

  const { moveFocusToNext, inputRefs } = useInputFocusChain(
    4,
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
      setErrorState(!validity);
    }
  };

  return (
    <InputContainer>
      <InputLabel text="카드 번호" name="numbers" />
      <Row>
        {[1, 2, 3, 4].map((inputNumber) => (
          <Input
            key={inputNumber}
            {...numbersInputInfo}
            type={inputNumber < 3 ? "text" : "password"}
            label={`number${inputNumber}`}
            handleInput={handleInput(inputNumber - 1)}
            handleOutFocus={validate}
            handleFocus={removeError}
            ref={inputRefs[inputNumber - 1]}
            error={{
              isError: isError,
              errorMessage: inputNumber === 1 ? ERROR_MESSAGE.CARD_NUMBERS : "",
            }}
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
