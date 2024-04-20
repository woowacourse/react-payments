import { LabelText, TitleText } from "../styles/common";

import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import isAlphabetOrWhiteSpace from "../utils/isAlphabetOrWhiteSpace";
import styled from "styled-components";
import { useState } from "react";

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

interface CardOwnerNameProps {
  cardOwnerName: string;
  onChange: (inputValue: string) => void;
}

export default function CardOwnerName({
  cardOwnerName,
  onChange,
}: CardOwnerNameProps) {
  const [errorMessage, setErrorMessage] = useState("");

  const onOwnerNameChange = (inputValue: string) => {
    try {
      validateOwnerNameOnChange(inputValue);
      setErrorMessage("");
      const upperName = inputValue.toUpperCase();
      onChange(upperName);
      return false;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      return true;
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
            onChange={onOwnerNameChange}
            value={cardOwnerName}
          />
        </InputContainer>
        <ErrorMessage message={errorMessage}></ErrorMessage>
      </CardOwnerNameBox>
    </CardOwnerNameContainer>
  );
}
