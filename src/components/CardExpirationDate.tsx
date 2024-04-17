import React, { useState } from "react";
import Input from "./Input";
import { TitleText, CaptionText, LabelText } from "../styles/common";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

interface Props {
  cardExpirationMonth: string;
  cardExpirationYear: string;
  inputHandler: (inputValue: string, inputId: string) => void;
}

export default function CardExpirationDate({
  cardExpirationMonth,
  cardExpirationYear,
  inputHandler,
}: Props) {
  const [errorMessage, setErrorMessage] = useState("");

  const numberValidator = (numbers: string) => {
    if (numbers.length !== 0 && !Number(numbers)) {
      setErrorMessage("숫자만 입력해주세요");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const lengthValidator = (numbers: string) => {
    if (numbers.length !== 2) {
      setErrorMessage("두 자리 수를 입력해주세요");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const isValidInput = (value: string, fieldName: string) => {
    if (!numberValidator(value)) {
      return true;
    }
    inputHandler(value, fieldName);
    return false;
  };

  const isValidLength = (value: string) => {
    if (!lengthValidator(value)) {
      return true;
    }
    return false;
  };

  return (
    <>
      <TitleText>카드 유효기간을 입력해 주세요</TitleText>
      <CaptionText>월/년도(MMYY)를 순서대로 입력해 주세요.</CaptionText>
      <LabelText>유효기간</LabelText>
      <InputContainer>
        <Input
          maxLength={2}
          placeholder="MM"
          onChange={(value) => isValidInput(value, "cardExpirationMonth")}
          value={cardExpirationMonth}
          onBlur={isValidLength}
        />
        <Input
          maxLength={2}
          placeholder="YY"
          onChange={(value) => isValidInput(value, "cardExpirationYear")}
          value={cardExpirationYear}
          onBlur={isValidLength}
        />
      </InputContainer>
      <ErrorMessage message={errorMessage}></ErrorMessage>
    </>
  );
}
