import { useState } from "react";
import Input from "./Input";
import { TitleText, CaptionText, LabelText } from "../styles/common";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

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
            onChange={(value) => isValidInput(value, "cardNumber1")}
            value={cardNumber1}
            onBlur={isValidLength}
          />
          <Input
            maxLength={4}
            placeholder="1234"
            onChange={(value) => isValidInput(value, "cardNumber2")}
            value={cardNumber2}
            onBlur={isValidLength}
          />
          <Input
            type="password"
            maxLength={4}
            placeholder="1234"
            onChange={(value) => isValidInput(value, "cardNumber3")}
            value={cardNumber3}
            onBlur={isValidLength}
          />
          <Input
            type="password"
            maxLength={4}
            placeholder="1234"
            onChange={(value) => isValidInput(value, "cardNumber4")}
            value={cardNumber4}
            onBlur={isValidLength}
          />
        </InputContainer>
        <ErrorMessage message={errorMessage}></ErrorMessage>
      </CardNumberBox>
    </CardNumbersContainer>
  );
}
