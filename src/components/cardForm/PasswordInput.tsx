import Container from "../common/Container";
import Input from "../common/Input";
import InputLabel from "../common/InputLabel";

import { useRef, useCallback, useContext } from "react";

import styled from "styled-components";

import { SubmitManageContext } from "../../contexts/SubmitManageContext";

import { PASSWORD_MAXLEGNTH, NUMBER_REGEX } from "../../constants";

const passwordInfo = {
  placeholder: "",
  type: "password",
  $textPosition: "center",
  $width: "43px",

  length: 2,
};

const cannotInput = (text: string): boolean => {
  return text.length > PASSWORD_MAXLEGNTH || !new RegExp(NUMBER_REGEX).test(text);
};

const PasswordInput = () => {
  const isPassWordsCompleted = useRef<boolean[]>(new Array(passwordInfo.length).fill(false));
  const { setIsPassWordCompleted } = useContext(SubmitManageContext);

  const handleInput = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      if (text.length === 0) {
        isPassWordsCompleted.current[index] = false;
        setIsPassWordCompleted(false);
      }

      if (cannotInput(text)) {
        e.target.value = text.slice(0, -1);
        return;
      }

      isPassWordsCompleted.current[index] = false;
      if (text.length === PASSWORD_MAXLEGNTH) isPassWordsCompleted.current[index] = true;

      setIsPassWordCompleted(false);
      if (isPassWordsCompleted.current.every((isCompleted) => isCompleted)) setIsPassWordCompleted(true);
    },
    [setIsPassWordCompleted, cannotInput, isPassWordsCompleted]
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

export default PasswordInput;
