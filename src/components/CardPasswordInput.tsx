import { CaptionText, LabelText, TitleText } from "../styles/common";

import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import isNumericString from "../utils/isNumericString";
import styled from "styled-components";

const CardPassInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const CardPasswordInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const validateCardPasswordOnChange = (inputValue: string) => {
  if (!isNumericString(inputValue)) {
    throw new Error("비밀번호는 숫자만 입력할 수 있어요");
  }
};

const validateCardPasswordOnBlur = (inputValue: string) => {
  if (inputValue.length !== 2) {
    throw new Error("비밀번호는 두 자리 숫자로 입력해 주세요");
  }
};

interface CardPasswordInputProps {
  cardPassword: string;
  errorState: { isError: boolean; errorMessage: string };
  onChange: (inputValue: string) => void;
  updateErrorState: ({
    isError,
    errorMessage,
  }: {
    isError: boolean;
    errorMessage: string;
  }) => void;
}

export default function CardPasswordInput({
  cardPassword,
  errorState,
  onChange,
  updateErrorState,
}: CardPasswordInputProps) {
  const onCardPasswordChange = (inputValue: string) => {
    try {
      validateCardPasswordOnChange(inputValue);
      updateErrorState({ isError: false, errorMessage: "" });
      onChange(inputValue);
      return false;
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState({ isError: true, errorMessage: error.message });
      }
      return true;
    }
  };

  const onCardPasswordBlur = (inputValue: string) => {
    try {
      validateCardPasswordOnBlur(inputValue);
      updateErrorState({ isError: false, errorMessage: "" });
      return false;
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState({ isError: true, errorMessage: error.message });
      }
      return true;
    }
  };

  return (
    <CardPassInputContainer>
      <div>
        <TitleText>비밀번호를 입력해 주세요</TitleText>
        <CaptionText>앞의 2자리를 입력해주세요</CaptionText>
      </div>
      <CardPasswordInputBox>
        <LabelText>비밀번호 앞 2자리</LabelText>
        <InputContainer>
          <Input
            maxLength={2}
            type="password"
            value={cardPassword}
            onChange={onCardPasswordChange}
            onBlur={onCardPasswordBlur}
          />
        </InputContainer>
        {errorState.isError && (
          <ErrorMessage message={errorState.errorMessage} />
        )}
      </CardPasswordInputBox>
    </CardPassInputContainer>
  );
}
