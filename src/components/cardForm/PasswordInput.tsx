import { useState, useRef, useEffect } from "react";
import { InputContainer } from "../common/InputContainer";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import styled from "styled-components";
import { isNumeric } from "../../utils/validate";
import { useFocusChain } from "../../hook/useFocusChain";

const passwordInfo = {
  $width: "43px",
  $textPosition: "center",
  type: "password",
};

interface PasswordInputProps {
  validatePasswordInput: (password: string[]) => boolean;
}

export const PasswordInput = ({
  validatePasswordInput,
}: PasswordInputProps) => {
  const [password, setPassword] = useState(["", ""]);
  const [isValid, setIsValid] = useState(true);

  const allRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const { moveFocusToNext } = useFocusChain(allRefs, 1);

  const handleInput =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (value.length > 1 || !isNumeric(value)) {
        e.target.value = value.slice(0, -1);
        return;
      }

      setPassword((prev) => {
        const newPassword = [...prev];
        newPassword[index] = value;
        return newPassword;
      });

      moveFocusToNext(index, value);
    };

  useEffect(() => {
    validate();
  }, [password]);

  const validate = () => {
    const validity = validatePasswordInput(password);
    setIsValid(validity);
  };

  return (
    <InputContainer>
      <InputLabel text="비밀번호" name="password" />
      <Row>
        <Input
          {...passwordInfo}
          handleInput={handleInput(0)}
          label="password1"
          error={{
            isValid: isValid,
            errorMessage: "비밀번호를 입력하세요.",
          }}
          ref={allRefs[0]}
        />
        <Input
          {...passwordInfo}
          handleInput={handleInput(1)}
          label="password2"
          ref={allRefs[1]}
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
