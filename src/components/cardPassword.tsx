import { useContext, useEffect } from "react";
import styled from "styled-components";
import { MAX_LENGTH } from "../constants/inputInfo";
import { ValidateContext } from "../contexts/validate";
import { useError } from "../hooks/useError";
import { useInputPassword } from "../hooks/useInputPassword";
import { validation } from "../validation";
import { Input } from "./common/Input";
import { InputBox } from "./common/InputBox";

export function CardPassword() {
  const { password, handleChange } = useInputPassword();
  const { error, handleError } = useError();
  const { valid, changeValid } = useContext(ValidateContext);

  useEffect(() => {
    changeValid("validPassword", error);
  }, [password]);

  return (
    <Wrapper>
      <InputBox
        type={"PASSWORD"}
        error={error}
        style={{ backgroundColor: "transparent" }}>
        {Object.keys(password).map((cardInput, _, original) => {
          return (
            <Input
              key={cardInput}
              handleChange={handleChange}
              handleError={() =>
                handleError(
                  Object.values(password).join(""),
                  validation.isNumber
                )
              }
              name={cardInput}
              maxLength={MAX_LENGTH.PASSWORD}
              type="password"
              style={{ marginRight: "0.7rem" }}
            />
          );
        })}
        <DefaultDot>•</DefaultDot>
        <DefaultDot>•</DefaultDot>
      </InputBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 17rem;
`;

const DefaultDot = styled.div`
  margin: 0 1rem;

  font-size: 2rem;
`;
