import { useContext } from "react";
import styled from "styled-components";
import { LABEL, TEXT_LENGTH } from "../constants/inputInfo";
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
            maxLength={TEXT_LENGTH.CODE}
            minLength={TEXT_LENGTH.CODE}
            type="password"
            name="code"
            inputRef={inputRef}
            asChild>
            <SecurityCodeInput />
          </Input>
        </InputGroup>
        <WarningImage src="/assets/helpIc.svg" />
      </Wrapper>
    </InputBox>
  );
}

const Wrapper = styled.section`
  position: relative;
  width: 15rem;
`;

const WarningImage = styled.img`
  position: absolute;
  left: 16rem;

  top: 2rem;
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
