import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../inputs.css";
import Input from "../../shared/input/Input";

type CardPasswordInputsProps = {
  password: {
    values: { password: string };
    changeValues: (type: "password", password: string) => void;
    isFullFilled: () => boolean;
  };
  passwordError: {
    error: Record<"password", string>;
    checkValidation: ({
      length,
      value,
      type,
    }: {
      length: number;
      value: string;
      type: "password";
    }) => void;
    getErrorMessage: () => string | undefined;
    isError: () => boolean;
  };
};

export default function CardPasswordInputs({
  password,
  passwordError,
}: CardPasswordInputsProps) {
  const errorMessage = passwordError.getErrorMessage();

  return (
    <StyledContainer>
      <label htmlFor="">비밀번호 앞 2자리</label>
      <StyledInputWrap>
        <Input
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
