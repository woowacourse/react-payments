import { LabelText, TitleText } from "../styles/common";

import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
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

interface CardOwnerNameProps {
  cardOwnerName: string;
  onChange: (inputValue: string) => void;
}

export default function CardOwnerName({
  cardOwnerName,
  onChange,
}: CardOwnerNameProps) {
  const [errorMessage, setErrorMessage] = useState("");

  const nameValidator = (name: string) => {
    const upperName = name.toUpperCase();
    const pattern: RegExp = /^[A-Z\s]*$/; // 영문자 대문자 또는 공백만 허용

    if (upperName.length !== 0 && !pattern.test(upperName)) {
      setErrorMessage("영문자만 입력해주세요");
      return true;
    }

    onChange(upperName);
    setErrorMessage("");
    return false;
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
            onChange={(value) => nameValidator(value)}
            value={cardOwnerName}
          />
        </InputContainer>
        <ErrorMessage message={errorMessage}></ErrorMessage>
      </CardOwnerNameBox>
    </CardOwnerNameContainer>
  );
}
