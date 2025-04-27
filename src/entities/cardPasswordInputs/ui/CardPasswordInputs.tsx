import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../../css/inputs.css";
import { CardPasswordInputsProps } from "../types/CardPasswordInputs.types";
import Input from "../../../shared/input/Input";
import useAutoFocus from "../../hooks/useAutoFocus";

export default function CardPasswordInputs({
  password,
  passwordError,
}: CardPasswordInputsProps) {
  const errorMessage = passwordError.getErrorMessage();

  const { inputRefs } = useAutoFocus({
    inputCount: 1,
    inputMaxLength: 2,
  });

  return (
    <StyledContainer>
      <label htmlFor="">비밀번호 앞 2자리</label>
      <StyledInputWrap>
        <Input
          ref={inputRefs[0]}
          value={password.values.password}
          onChange={(e) => {
            password.changeValues("password", e.target.value);
            passwordError.checkValidation({
              length: 2,
              value: e.target.value,
              type: "password",
            });
          }}
          isError={passwordError.isError()}
          width="100%"
          maxLength={2}
          placeholder="비밀번호 앞 2자리"
          type="password"
        />
      </StyledInputWrap>
      {errorMessage ? (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      ) : null}
    </StyledContainer>
  );
}
