import styled from "styled-components";
import {
  ERROR_MESSAGES,
  PASSWORD_INPUT_COUNT,
  PASSWORD_LENGTH,
} from "../../../constants";
import { isNumericInput } from "../../../validators/input";
import { isPasswordLengthValid } from "../../../validators/password";
import Label from "../../../../../common/components/Label/Label";
import Input from "../../../../../common/components/Input/Input";
import useInputErrorState from "../../../../../hooks/useInputErrorState";

const PasswordField = ({
  password,
  setPassword,
}: {
  password: string;
  setPassword: (value: string) => void;
}) => {
  const {
    updateErrorMessage,
    clearErrorMessage,
    firstErrorIndex,
    firstErrorMessage,
    isTouched,
    touchField,
  } = useInputErrorState(PASSWORD_INPUT_COUNT);

  const handlePasswordChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!isNumericInput(value)) {
      return;
    }

    setPassword(value);

    if (isTouched[index] && isPasswordLengthValid(value)) {
      clearErrorMessage(index);
    }
  };

  const handlePasswordBlur = (index: number, eValue: string) => {
    const value = eValue.trim();

    touchField(index);

    if (!isPasswordLengthValid(value)) {
      updateErrorMessage(index, ERROR_MESSAGES.password);
      return;
    }

    clearErrorMessage(index);
  };

  return (
    <StyledField>
      <Label htmlFor="password">비밀번호 앞 2자리</Label>
      <InputWrapper>
        <PasswordInput
          type="password"
          id="password"
          value={password}
          maxLength={PASSWORD_LENGTH}
          inputMode="numeric"
          placeholder="**"
          strokeMode={0 === firstErrorIndex ? "error" : "default"}
          onChange={(e) => handlePasswordChange(0, e.target.value)}
          onBlur={(e) => handlePasswordBlur(0, e.target.value)}
          autoFocus
        />
      </InputWrapper>
      <ErrorMessage>{firstErrorMessage}</ErrorMessage>
    </StyledField>
  );
};

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 12px;

  width: 100%;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
`;

const PasswordInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;

const ErrorMessage = styled.span`
  min-height: 20px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;

export default PasswordField;
