import React, { useState } from "react";
import Input from "./Input";
import { TitleText, LabelText } from "../styles/common";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

interface Props {
  cardOwnerName: string;
  inputHandler: (inputValue: string, inputId: string) => void;
}

export default function CardOwnerName({ cardOwnerName, inputHandler }: Props) {
  const [errorMessage, setErrorMessage] = useState("");

  const nameValidator = (name: string) => {
    const upperName = name.toUpperCase();
    const pattern: RegExp = /^[A-Z\s]*$/; // 영문자 대문자 또는 공백만 허용

    if (upperName.length !== 0 && !pattern.test(upperName)) {
      setErrorMessage("영문자만 입력해주세요");
      return true;
    }

    inputHandler(upperName, "cardOwnerName");
    setErrorMessage("");
    return false;
  };

  return (
    <div>
      <TitleText>카드 소유자 이름을 입력해 주세요</TitleText>
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
    </div>
  );
}
