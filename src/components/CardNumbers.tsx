import { CaptionText, LabelText, TitleText } from "../styles/common";

import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import styled from "styled-components";
import { useState } from "react";

const CardNumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardNumberBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

interface CardNumbersProps {
  cardNumbers: CardInformation["cardNumbers"];
  onChange: (inputValue: string, targetIndex: number) => void;
}

export default function CardNumbers({
  cardNumbers,
  onChange,
}: CardNumbersProps) {
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
    if (numbers.length !== 4) {
      setErrorMessage("네 자리 수를 입력해주세요");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const isValidInput = (value: string, targetIndex: number) => {
    if (!numberValidator(value)) {
      return true;
    }
    onChange(value, targetIndex);
    return false;
  };

  const isValidLength = (value: string) => {
    if (!lengthValidator(value)) {
      return true;
    }
    return false;
  };

  return (
    <CardNumbersContainer>
      <div>
        <TitleText>결제할 카드 번호를 입력해 주세요</TitleText>
        <CaptionText>본인 명의의 카드만 결제 가능합니다.</CaptionText>
      </div>
      <CardNumberBox>
        <LabelText>카드 번호</LabelText>
        <InputContainer>
          <Input
            maxLength={4}
            placeholder="1234"
            onChange={(value) => isValidInput(value, 0)}
            value={cardNumbers[0]}
            onBlur={isValidLength}
          />
          <Input
            maxLength={4}
            placeholder="1234"
            onChange={(value) => isValidInput(value, 1)}
            value={cardNumbers[1]}
            onBlur={isValidLength}
          />
          <Input
            maxLength={4}
            placeholder="1234"
            onChange={(value) => isValidInput(value, 2)}
            value={cardNumbers[2]}
            onBlur={isValidLength}
          />
          <Input
            maxLength={4}
            placeholder="1234"
            onChange={(value) => isValidInput(value, 3)}
            value={cardNumbers[3]}
            onBlur={isValidLength}
          />
        </InputContainer>
        <ErrorMessage message={errorMessage}></ErrorMessage>
      </CardNumberBox>
    </CardNumbersContainer>
  );
}
