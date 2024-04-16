import React, { useState } from "react";
import Input from "./Input";
import { TitleText, CaptionText, LabelText } from "../styles/common";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

interface Props {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
  inputHandler: (inputValue: string, inputId: string) => void;
}

export default function CardNumbers({
  cardNumber1,
  cardNumber2,
  cardNumber3,
  cardNumber4,
  inputHandler,
}: Props) {
  const [currentErrorTarget, setCurrentErrorTarget] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const numberValidator = (numbers: string) => {
    if (numbers.length === 0) {
      setErrorMessage("");
      return true;
    }
    if (!Number(numbers)) {
      setErrorMessage("숫자만 입력해주세요");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  return (
    <>
      <TitleText>결제할 카드 번호를 입력해 주세요</TitleText>
      <CaptionText>본인 명의의 카드만 결제 가능합니다.</CaptionText>
      <LabelText>카드 번호</LabelText>
      <InputContainer>
        <Input
          maxLength={4}
          placeholder="1234"
          inputHandler={(value) => {
            const valid = numberValidator(value);
            if (!valid) {
              setCurrentErrorTarget("cardNumber1");
              return;
            }

            inputHandler(value, "cardNumber1");
            setCurrentErrorTarget("");
          }}
          value={cardNumber1}
          isError={currentErrorTarget === "cardNumber1"}
        />
        <Input
          maxLength={4}
          placeholder="1234"
          inputHandler={(value) => {
            const valid = numberValidator(value);
            if (!valid) {
              setCurrentErrorTarget("cardNumber2");
              return;
            }

            inputHandler(value, "cardNumber2");
            setCurrentErrorTarget("");
          }}
          value={cardNumber2}
          isError={currentErrorTarget === "cardNumber2"}
        />
        <Input
          maxLength={4}
          placeholder="1234"
          inputHandler={(value) => {
            const valid = numberValidator(value);
            if (!valid) {
              setCurrentErrorTarget("cardNumber3");
              return;
            }

            inputHandler(value, "cardNumber3");
            setCurrentErrorTarget("");
          }}
          value={cardNumber3}
          isError={currentErrorTarget === "cardNumber3"}
        />
        <Input
          maxLength={4}
          placeholder="1234"
          inputHandler={(value) => {
            const valid = numberValidator(value);
            if (!valid) {
              setCurrentErrorTarget("cardNumber4");
              return;
            }

            inputHandler(value, "cardNumber4");
            setCurrentErrorTarget("");
          }}
          value={cardNumber4}
          isError={currentErrorTarget === "cardNumber4"}
        />
      </InputContainer>
      <ErrorMessage message={errorMessage}></ErrorMessage>
    </>
  );
}
