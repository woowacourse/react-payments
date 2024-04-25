import { CaptionText, LabelText, TitleText } from "../../../styles/common";

import { CardPasswordErrorState } from "../../../hooks/useCardPassword";
import ErrorMessage from "../../common/ErrorMessage";
import Input from "../../common/Input";
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

export interface CardPasswordInputProps {
  valueState: string;
  errorState: CardPasswordErrorState;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function CardPasswordInput({
  valueState,
  errorState,
  onChange,
  onBlur,
}: CardPasswordInputProps) {
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
            value={valueState}
            isError={errorState.isError}
            onChange={onChange}
            onBlur={onBlur}
          />
        </InputContainer>
        {errorState.isError && (
          <ErrorMessage message={errorState.errorMessage} />
        )}
      </CardPasswordInputBox>
    </CardPassInputContainer>
  );
}
