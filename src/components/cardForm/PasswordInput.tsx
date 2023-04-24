import { InputContainer } from "../common/InputContainer";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import styled from "styled-components";
import { useState } from "react";
import { CARD_INPUT_NUMBER } from "../../constant/cardInput";
import { isInputFilled, isNumeric } from "../../utils/validate";

const passwordInfo = {
  width: "43px",
  placeholder: "",
  textPosition: "center",
  type: "password",
};

export const PasswordInput = () => {
  const [isCompleted, setIsCompleted] = useState(true);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > 1 || !isNumeric(value)) {
      e.target.value = value.slice(0, -1);
      return;
    }
  };

  const handleOutFocusEvent = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setIsCompleted(false);

    if (isInputFilled(value, CARD_INPUT_NUMBER.PASSWORD)) {
      setIsCompleted(true);
    }
  };

  return (
    <InputContainer>
      <InputLabel text="비밀번호" name="password" />
      <Row>
        <Input
          {...passwordInfo}
          handleInput={handleInput}
          handleChange={handleOutFocusEvent}
          label="password1"
          error={{
            isValid: isCompleted,
            errorMessage: "비밀번호를 입력하세요.",
          }}
        />
        <Input
          {...passwordInfo}
          handleInput={handleInput}
          handleChange={handleOutFocusEvent}
          label="password2"
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
