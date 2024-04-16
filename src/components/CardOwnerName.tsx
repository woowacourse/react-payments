import React from "react";
import Input from "./Input";
import { TitleText, LabelText } from "../styles/common";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

interface Props {
  inputHandler: (inputValue: string, inputId: string) => void;
  value: string;
}

export default function CardOwnerName({ inputHandler, value }: Props) {
  return (
    <>
      <TitleText>카드 소유자 이름을 입력해 주세요</TitleText>
      <LabelText>소유자 이름</LabelText>
      <InputContainer>
        <Input
          maxLength={50}
          placeholder="JOHN DOE"
          inputHandler={(value) => inputHandler(value, "cardOwnerName")}
          value={value}
        />
      </InputContainer>
    </>
  );
}
