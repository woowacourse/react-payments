import styled from "styled-components";
import { MAX_LENGTH, PLACEHOLDER } from "../constants/inputInfo";
import { useError } from "../hooks/useError";
import { useInputCode } from "../hooks/useInputCode";
import { validation } from "../validation";
import { CountText } from "./common/countText";
import { Input } from "./common/Input";
import { InputBox } from "./common/InputBox";

export function SecurityCode() {
  const { code, handleChange } = useInputCode();
  const { error, handleError } = useError();

  return (
    <Wrapper>
      <InputBox type={"CODE"} error={error}>
        <Input
          handleChange={handleChange}
          handleError={() => handleError(code, validation.isNumber)}
          maxLength={MAX_LENGTH.CODE}
          type="password"
        />
      </InputBox>
      <Img src="/assets/helpIc.svg" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  margin: 0.7rem;
`;
