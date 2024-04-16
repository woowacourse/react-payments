import React from "react";
import Input from "./Input";
import { TitleText, CaptionText, LabelText } from "../styles/common";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

interface Props {
  inputHandler: (inputValue: string, inputId: string) => void;
}

export default function CardNumbers({ inputHandler }: Props) {
  return (
    <>
      <TitleText>결제할 카드 번호를 입력해 주세요</TitleText>
      <CaptionText>본인 명의의 카드만 결제 가능합니다.</CaptionText>
      <LabelText>카드 번호</LabelText>
      <InputContainer>
        <Input
          maxLength={4}
          placeholder="1234"
          inputHandler={(value) => inputHandler(value, "cardNumber1")}
        />
        <Input
          maxLength={4}
          placeholder="1234"
          inputHandler={(value) => inputHandler(value, "cardNumber2")}
        />
        <Input
          maxLength={4}
          placeholder="1234"
          inputHandler={(value) => inputHandler(value, "cardNumber3")}
        />
        <Input
          maxLength={4}
          placeholder="1234"
          inputHandler={(value) => inputHandler(value, "cardNumber4")}
        />
      </InputContainer>
    </>
  );
}
