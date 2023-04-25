import { useContext } from "react";
import styled from "styled-components";
import { LABEL, MAX_LENGTH } from "../constants/inputInfo";
import { RefContext } from "../contexts/cardInfo";
import { useInputPassword } from "../hooks/useInputPassword";
import { Input } from "./common/Input";
import { InputBox } from "./common/InputBox";
import { InputLabel } from "./common/inputLabel";

export function CardPassword() {
  const { password, handleChange } = useInputPassword();
  const inputRef = useContext(RefContext);

  return (
    <InputBox inputState={{ password, handleChange }}>
      <Wrapper>
        <InputLabel text={LABEL.PASSWORD} />
        <InputWrapper>
          {Object.keys(password).map((cardInput, _) => {
            return (
              <Input
                key={cardInput}
                name={cardInput}
                maxLength={MAX_LENGTH.PASSWORD}
                type="password"
                inputRef={inputRef}>
                <PasswordInput />
              </Input>
            );
          })}
          <DefaultDot>•</DefaultDot>
          <DefaultDot>•</DefaultDot>
        </InputWrapper>
      </Wrapper>
    </InputBox>
  );
}

const Wrapper = styled.section`
  width: 17rem;
`;

const DefaultDot = styled.div`
  margin: 0 1rem;

  ${({ theme }) => theme.fonts.body};
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;

  ${({ theme }) => theme.fonts.body}

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 7px;
`;

const PasswordInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 4.5rem;

  padding: 0 1rem;

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 0.7rem;

  text-align: center;
  outline: none;
`;
