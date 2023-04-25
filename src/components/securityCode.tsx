import { useContext } from "react";
import styled from "styled-components";
import { LABEL, MAX_LENGTH } from "../constants/inputInfo";
import { RefContext } from "../contexts/cardInfo";
import { useInputCode } from "../hooks/useInputCode";
import { Input } from "./common/Input";
import { InputBox } from "./common/InputBox";
import { InputGroup } from "./common/inputGroup";
import { InputLabel } from "./common/inputLabel";

export function SecurityCode() {
  const { code, handleChange } = useInputCode();
  const inputRef = useContext(RefContext);

  return (
    <InputBox inputState={{ code, handleChange }}>
      <Wrapper>
        <InputLabel text={LABEL.CODE} />
        <InputGroup>
          <Input
            maxLength={MAX_LENGTH.CODE}
            type="password"
            name="code"
            inputRef={inputRef}>
            <SecurityCodeInput />
          </Input>
          <Img src="/assets/helpIc.svg" />
        </InputGroup>
      </Wrapper>
    </InputBox>
  );
}

const Wrapper = styled.section`
  width: 15rem;
`;

const Img = styled.img`
  margin: 0.7rem;
`;

const SecurityCodeInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 4.5rem;

  padding: 0 1rem;

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 0.7rem;

  text-align: center;
  outline: none;
`;
