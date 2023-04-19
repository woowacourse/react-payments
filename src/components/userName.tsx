import styled from "styled-components";
import { MAX_LENGTH, PLACEHOLDER } from "../constants/inputInfo";
import { useError } from "../hooks/useError";
import { useInputName } from "../hooks/useInputName";
import { validation } from "../validation";
import { CountText } from "./common/countText";
import { Input } from "./common/Input";
import { InputBox } from "./common/InputBox";

export function UserName() {
  const { userName, handleChange } = useInputName();
  const { error, handleError } = useError();

  return (
    <Wrapper>
      <InputBox
        type={"NAME"}
        error={error}
        render={() => CountText(MAX_LENGTH.NAME)}>
        <Input
          handleChange={handleChange}
          handleError={() => handleError(userName, validation.isString)}
          maxLength={MAX_LENGTH.NAME}
          placeholder={PLACEHOLDER.NAME}
          style={{ textAlign: "left" }}
        />
      </InputBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 31.8rem;
`;
