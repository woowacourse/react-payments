import styled from "styled-components";
import { useState } from "react";
import { useError } from "hook/useError";
import { useInputFocusChain } from "hook/useInputFocusChain";
import { ERROR_MESSAGE, INPUT_FULL_LENGTH } from "constant/cardInput";
import { isNumeric } from "utils/validate";
import { Input, InputContainer, InputLabel } from "components/common";

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
  const { isError, setErrorState, removeError } = useError();
  const { inputRefs, moveFocusToNext } = useInputFocusChain(
    2,
    INPUT_FULL_LENGTH.PASSWORD
  );

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
    setErrorState(!validity);
  };

  return (
    <InputContainer>
      <InputLabel text="비밀번호" name="password" />
      <Row>
        <Input
          {...passwordInfo}
          handleInput={handleInput(0)}
          handleOutFocus={validate}
          handleFocus={removeError}
          label="password1"
          error={{
            isError: isError,
            errorMessage: ERROR_MESSAGE.PASSWORDS,
          }}
          ref={inputRefs[0]}
        />
        <Input
          {...passwordInfo}
          handleInput={handleInput(1)}
          handleOutFocus={validate}
          handleFocus={removeError}
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
