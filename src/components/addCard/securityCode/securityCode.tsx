import styled from "styled-components";
import { WarningIc } from "../../../assets";
import { LABEL, TEXT_LENGTH } from "../../../constants/inputInfo";
import { useInputCode } from "../../../hooks/useInputCode";
import { Input } from "../../@common/input/Input";
import { InputBox } from "../../@common/input/InputBox";
import { InputGroup } from "../../@common/input/inputGroup";
import { InputLabel } from "../../@common/input/inputLabel";

export function SecurityCode() {
  const { code, handleChange } = useInputCode();

  return (
    <InputBox<string> inputState={{ value: code, handleChange }}>
      <Wrapper>
        <InputLabel text={LABEL.CODE} />
        <InputGroup>
          <Input
            maxLength={TEXT_LENGTH.CODE}
            minLength={TEXT_LENGTH.CODE}
            type="password"
            name="code"
            asChild>
            <SecurityCodeInput />
          </Input>
        </InputGroup>
        <WarningIcon />
      </Wrapper>
    </InputBox>
  );
}

const Wrapper = styled.section`
  position: relative;
  width: 15rem;
`;

const WarningIcon = styled(WarningIc)`
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
