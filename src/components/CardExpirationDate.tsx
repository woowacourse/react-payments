import React from "react";
import Input from "./Input";
import { TitleText, CaptionText, LabelText } from "../styles/common";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

interface Props {
  inputHandler: (inputValue: string, inputId: string) => void;
}

export default function CardExpirationDate({ inputHandler }: Props) {
  return (
    <>
      <TitleText>카드 유효기간을 입력해 주세요</TitleText>
      <CaptionText>월/년도(MMYY)를 순서대로 입력해 주세요.</CaptionText>
      <LabelText>유효기간</LabelText>
      <InputContainer>
        <Input
          maxLength={2}
          placeholder="MM"
          inputHandler={(value) => inputHandler(value, "cardExpirationMonth")}
        />
        <Input
          maxLength={2}
          placeholder="YY"
          inputHandler={(value) => inputHandler(value, "cardExpirationYear")}
        />
      </InputContainer>
    </>
  );
}
