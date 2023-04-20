import { useContext, useEffect } from "react";
import styled from "styled-components";
import { MAX_LENGTH, PLACEHOLDER } from "../constants/inputInfo";
import { NameContext } from "../contexts/cardInfo";
import { ValidateContext } from "../contexts/validate";
import { useError } from "../hooks/useError";
import { validation } from "../validation";
import { CountText } from "./common/countText";
import { Input } from "./common/Input";
import { InputBox } from "./common/InputBox";

export function UserName() {
  const { userName, handleChange } = useContext(NameContext);
  const { error, handleError } = useError();
  const { valid, changeValid } = useContext(ValidateContext);

  useEffect(() => {
    changeValid("validName", error);
  }, [userName]);

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
