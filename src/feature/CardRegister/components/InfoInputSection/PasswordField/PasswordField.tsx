import styled from "styled-components";
import {
  ERROR_MESSAGES,
  PASSWORD_INPUT_COUNT,
  PASSWORD_LENGTH,
} from "../../../constants";
import { useState } from "react";
import { validateNumericInput } from "../../../validators/input";
import {
  validateExceedPasswordLength,
  validatePasswordLength,
} from "../../../validators/password";
import Label from "../../../../../common/components/Label/Label";
import Input from "../../../../../common/components/Input/Input";

const PasswordField = ({
  password,
  setPassword,
}: {
  password: string;
  setPassword: (value: string) => void;
}) => {
  const [errorInfo, setErrorInfo] = useState(
    Array.from({ length: PASSWORD_INPUT_COUNT }, () => ""),
  );
  const [isTouched, setIsTouched] = useState(
    Array.from({ length: PASSWORD_INPUT_COUNT }, () => false),
  );

  const handlePasswordChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!validateNumericInput(value)) {
      return;
    }
    if (validateExceedPasswordLength(value)) {
      return;
    }

    setPassword(value);

    if (isTouched[index] && validatePasswordLength(value)) {
      const newErrorInfo = errorInfo.map((message, errorIndex) =>
        errorIndex === index ? "" : message,
      );
      setErrorInfo(newErrorInfo);
    }
  };

  const handlePasswordBlur = (index: number, eValue: string) => {
    const value = eValue.trim();

    updateTouched(index);
    const newErrorInfo = errorInfo.map((message, errorIndex) =>
      errorIndex === index
        ? validatePasswordLength(value)
          ? ""
          : ERROR_MESSAGES.password
        : message,
    );
    setErrorInfo(newErrorInfo);
  };

  const updateTouched = (index: number) => {
    setIsTouched((prev) =>
      prev.map((touched, i) => (i === index ? true : touched)),
    );
  };

  const firstErrorIndex = errorInfo.findIndex((message) => message !== "");

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
      <ErrorMessage>{errorInfo[firstErrorIndex]}</ErrorMessage>
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
