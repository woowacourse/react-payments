import styled from "styled-components";
import { LABEL, TEXT_LENGTH } from "../../../constants/inputInfo";
import { useInputPassword } from "../../../hooks/useInputPassword";
import { Password } from "../../../type/input";
import { Input } from "../../@common/input/InputBox";

export function CardPassword() {
  const { password, handleChange } = useInputPassword();

  return (
    <Input<Password> inputState={{ value: password, handleChange }}>
      <Wrapper>
        <Input.Label>
          <div>{LABEL.PASSWORD}</div>
        </Input.Label>
        <InputWrapper>
          {Object.keys(password).map((cardInput, _) => {
            return (
              <Input.Unit
                key={cardInput}
                name={cardInput}
                maxLength={TEXT_LENGTH[cardInput.toUpperCase()]}
                minLength={TEXT_LENGTH[cardInput.toUpperCase()]}
                type="password"
                asChild>
                <PasswordInput />
              </Input.Unit>
            );
          })}
          <DefaultDot>•</DefaultDot>
          <DefaultDot>•</DefaultDot>
        </InputWrapper>
      </Wrapper>
    </Input>
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
