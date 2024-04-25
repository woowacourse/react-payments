import { LabelText, TitleText } from "../styles/common";

import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import isAlphabetOrWhiteSpace from "../utils/isAlphabetOrWhiteSpace";
import styled from "styled-components";

const CardOwnerNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const CardOwnerNameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const validateOwnerNameOnChange = (inputValue: string) => {
  if (!isAlphabetOrWhiteSpace(inputValue)) {
    throw new Error("영문자만 입력할 수 있어요");
  }
};

const validateOwnerNameOnBlur = (inputValue: string) => {
  if (inputValue.length === 0) {
    throw new Error("카드 소유자 이름을 입력해 주세요");
  }
};

interface CardOwnerNameProps {
  cardOwnerName: string;
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

export default function CardOwnerName({
  cardOwnerName,
  errorState,
  onChange,
  updateErrorState,
}: CardOwnerNameProps) {
  const onOwnerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      validateOwnerNameOnChange(event.target.value);
      updateErrorState({ isError: false, errorMessage: "" });
      const upperName = event.target.value.toUpperCase();
      onChange(upperName);
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState({ isError: true, errorMessage: error.message });
      }
    }
  };

  const onOwnerNameBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    try {
      validateOwnerNameOnBlur(event.target.value);
      updateErrorState({ isError: false, errorMessage: "" });
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState({ isError: true, errorMessage: error.message });
      }
    }
  };

  return (
    <CardOwnerNameContainer>
      <TitleText>카드 소유자 이름을 입력해 주세요</TitleText>
      <CardOwnerNameBox>
        <LabelText>소유자 이름</LabelText>
        <InputContainer>
          <Input
            maxLength={15}
            placeholder="JOHN DOE"
            value={cardOwnerName}
            isError={errorState.isError}
            onChange={onOwnerNameChange}
            onBlur={onOwnerNameBlur}
          />
        </InputContainer>
        {errorState.isError && (
          <ErrorMessage message={errorState.errorMessage} />
        )}
      </CardOwnerNameBox>
    </CardOwnerNameContainer>
  );
}
