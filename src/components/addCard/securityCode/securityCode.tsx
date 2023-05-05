import styled from "styled-components";
import { WarningIc } from "../../../assets";
import { LABEL, TEXT_LENGTH } from "../../../constants/inputInfo";
import { useInputCode } from "../../../hooks/useInputCode";
import { Input, InputBox } from "../../@common/input/InputBox";
import { InputGroup } from "../../@common/input/inputGroup";
import { InputLabel } from "../../@common/input/inputLabel";

export function SecurityCode() {
  const { code, handleChange } = useInputCode();

  return (
    <Input<string> inputState={{ value: code, handleChange }}>
      <Wrapper>
        <Input.Label>
          <div>보안코드</div>
        </Input.Label>
        <Input.Group>
          <Input.Unit
            maxLength={TEXT_LENGTH.CODE}
            minLength={TEXT_LENGTH.CODE}
            type="password"
            name="code">
            <SecurityCodeInput />
          </Input.Unit>
        </Input.Group>
        <WarningIcon />
      </Wrapper>
    </Input>
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
