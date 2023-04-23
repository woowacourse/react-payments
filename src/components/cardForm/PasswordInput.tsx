import { Container } from "../common/Container";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import { useRef, useCallback } from "react";
import styled from "styled-components";

import { PASSWORD_MAXLEGNTH, NUMBER_REGEX } from "../../constants";

interface PasswordProps {
  setIsCompleted: (isCompleted: boolean) => void;
}

const passwordInfo = {
  placeholder: "",
  type: "password",
  $textPosition: "center",
  $width: "43px",

  length: 2,
};

const cannotInput = (text: string): boolean => {
  return text.length > PASSWORD_MAXLEGNTH || !/\d/g.test(text);
};

export const PasswordInput = ({ setIsCompleted }: PasswordProps) => {
  const isInputsCompleted = useRef<boolean[]>(new Array(passwordInfo.length).fill(false));

  const handleInput = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      if (text.length === 0) {
        isInputsCompleted.current[index] = false;
        setIsCompleted(false);
      }

      if (cannotInput(text)) {
        console.log(text.length > PASSWORD_MAXLEGNTH || !NUMBER_REGEX.test(text));
        e.target.value = text.slice(0, -1);
        return;
      }

      isInputsCompleted.current[index] = false;
      if (text.length === PASSWORD_MAXLEGNTH) isInputsCompleted.current[index] = true;

      setIsCompleted(false);
      if (isInputsCompleted.current.every((isCompleted) => isCompleted)) setIsCompleted(true);
    },
    [setIsCompleted, cannotInput, isInputsCompleted]
  );

  return (
    <Container>
      <InputLabel text="비밀번호" name="password" />
      <Row>
        <Input {...passwordInfo} handleInput={handleInput(0)} label="password1" />
        <Input {...passwordInfo} handleInput={handleInput(1)} label="password2" />
        <HiddenPassword>●</HiddenPassword>
        <HiddenPassword>●</HiddenPassword>
      </Row>
    </Container>
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
