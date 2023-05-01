import styled from "styled-components";
import { useState } from "react";
import { InputContainer, Input, InputLabel } from "../common";
import { isNumeric } from "../../utils/validate";
import { useInputFocusChain } from "../../hook/useInputFocusChain";
import { ERROR_MESSAGE, INPUT_FULL_LENGTH } from "../../constant/cardInput";

const passwordInfo = {
  $width: "43px",
  $textPosition: "center",
  type: "password",
};

interface PasswordInputProps {
  setPassword: (index: number, value: string) => void;
  validatePasswordInput: (password: string[]) => boolean;
}

export const PasswordInput = ({
  setPassword,
  validatePasswordInput,
}: PasswordInputProps) => {
  const [inputValues, setInputValues] = useState(["", ""]);
  const [isValid, setIsValid] = useState(true);
  const { inputRefs, moveFocusToNext } = useInputFocusChain(2, 1);

  const handleInput =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (value.length > INPUT_FULL_LENGTH.PASSWORD || !isNumeric(value)) {
        e.target.value = value.slice(0, -1);
        return;
      }

      setInputValues((prev) => {
        const newPassword = [...prev];
        newPassword[index] = value;
        return newPassword;
      });
      setPassword(index, value);

      moveFocusToNext(index, value);
    };

  const validate = () => {
    const validity = validatePasswordInput(inputValues);
    setIsValid(validity);
  };

  const eraseErrorMessage = () => {
    setIsValid(true);
  };

  return (
    <InputContainer>
      <InputLabel text="비밀번호" name="password" />
      <Row>
        <Input
          {...passwordInfo}
          handleInput={handleInput(0)}
          handleOutFocus={validate}
          handleFocus={eraseErrorMessage}
          label="password1"
          error={{
            isValid: isValid,
            errorMessage: ERROR_MESSAGE.PASSWORDS,
          }}
          ref={inputRefs[0]}
        />
        <Input
          {...passwordInfo}
          handleInput={handleInput(1)}
          handleOutFocus={validate}
          handleFocus={eraseErrorMessage}
          label="password2"
          ref={inputRefs[1]}
        />
        <HiddenPassword>●</HiddenPassword>
        <HiddenPassword>●</HiddenPassword>
      </Row>
    </InputContainer>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
`;

const HiddenPassword = styled.div`
  display: flex;
  height: 45px;
  width: 43px;
  align-items: center;
  justify-content: center;

  font-size: 9px;
  font-weight: 500;
`;
