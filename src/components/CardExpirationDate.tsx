import { CaptionText, LabelText, TitleText } from "../styles/common";

import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import styled from "styled-components";
import { useState } from "react";

const CardDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const CardDateBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

interface CardExpirationDateProps {
  cardExpiration: CardInformation["cardExpiration"];
  onChange: (inputValue: string, inputId: string) => void;
}

export default function CardExpirationDate({
  cardExpiration,
  onChange,
}: CardExpirationDateProps) {
  const [errorMessage, setErrorMessage] = useState("");

  const numberValidator = (numbers: string) => {
    if (numbers.length !== 0 && !Number.isInteger(Number(numbers))) {
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

  const monthValidator = (numbers: string) => {
    if (Number(numbers) < 1 || Number(numbers) > 12) {
      setErrorMessage("1~12월 중 하나를 입력해주세요");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const yearValidator = (numbers: string) => {
    if (Number(numbers) < 24) {
      setErrorMessage("유효한 년도를 입력해주세요");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const isValidInput = (value: string, fieldName: string) => {
    if (!numberValidator(value)) {
      return true;
    }
    onChange(value, fieldName);
    return false;
  };

  const isValidMonth = (value: string) => {
    if (!lengthValidator(value) || !monthValidator(value)) {
      return true;
    }
    return false;
  };

  const isValidYear = (value: string) => {
    if (!lengthValidator(value) || !yearValidator(value)) {
      return true;
    }
    return false;
  };

  return (
    <CardDateContainer>
      <div>
        <TitleText>카드 유효기간을 입력해 주세요</TitleText>
        <CaptionText>월/년도(MMYY)를 순서대로 입력해 주세요.</CaptionText>
      </div>
      <CardDateBox>
        <LabelText>유효기간</LabelText>
        <InputContainer>
          <Input
            maxLength={2}
            placeholder="MM"
            onChange={(value) => isValidInput(value, "month")}
            value={cardExpiration.month}
            onBlur={isValidMonth}
          />
          <Input
            maxLength={2}
            placeholder="YY"
            onChange={(value) => isValidInput(value, "year")}
            value={cardExpiration.year}
            onBlur={isValidYear}
          />
        </InputContainer>
        <ErrorMessage message={errorMessage}></ErrorMessage>
      </CardDateBox>
    </CardDateContainer>
  );
}
