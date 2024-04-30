import { LabelText, TitleText } from "../../../styles/common";

import { CardCvcErrorState } from "../../../hooks/useCardCvc";
import ErrorMessage from "../../common/ErrorMessage";
import Input from "../../common/Input";
import styled from "styled-components";
import { useEffect } from "react";

export interface CardCvcInputProps {
  valueState: string;
  errorState: CardCvcErrorState;
  inputRef: React.RefObject<HTMLInputElement>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: () => void;
}

export default function CardCvcInput({
  valueState,
  errorState,
  inputRef,
  onChange,
  onBlur,
  onFocus,
}: CardCvcInputProps) {
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <CardCvcInputContainer>
      <div>
        <TitleText>CVC 번호를 입력해 주세요</TitleText>
      </div>
      <CardCvcInputBox>
        <LabelText>CVC</LabelText>
        <InputContainer>
          <Input
            ref={inputRef}
            maxLength={4}
            placeholder="123"
            value={valueState}
            isError={errorState.isError}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />
        </InputContainer>
        {errorState.isError && (
          <ErrorMessage message={errorState.errorMessage} />
        )}
      </CardCvcInputBox>
    </CardCvcInputContainer>
  );
}

const CardCvcInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const CardCvcInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;
