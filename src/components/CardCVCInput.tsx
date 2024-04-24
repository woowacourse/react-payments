import { LabelText, TitleText } from "../styles/common";

import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import isNumericString from "../utils/isNumericString";
import styled from "styled-components";
import { useState } from "react";

const CardCVCInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const CardCVCInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const validateCardCVCOnChange = (inputValue: string) => {
  if (!isNumericString(inputValue)) {
    throw new Error("CVC는 숫자만 입력할 수 있어요");
  }
};

const validateCardCVCOnblur = (inputValue: string) => {
  if (!(inputValue.length === 3 || inputValue.length === 4)) {
    throw new Error("CVC는 세 자리 또는 네 자리 숫자로 입력해 주세요");
  }
};

interface CardCVCInputProps {
  cardCVC: string;
  onChange: (inputValue: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

export default function CardCVCInput({
  cardCVC,
  onChange,
  onFocus,
  onBlur,
}: CardCVCInputProps) {
  const [errorMessage, setErrorMessage] = useState("");

  const onCardCVCChange = (inputValue: string) => {
    try {
      validateCardCVCOnChange(inputValue);
      setErrorMessage("");
      onChange(inputValue);
      return false;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      return true;
    }
  };

  const onCardCVCBlur = (inputValue: string) => {
    onBlur();
    try {
      validateCardCVCOnblur(inputValue);
      setErrorMessage("");
      return false;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      return true;
    }
  };

  const onCardCVCFocus = () => {
    onFocus();
  };

  return (
    <CardCVCInputContainer>
      <div>
        <TitleText>CVC 번호를 입력해 주세요</TitleText>
      </div>
      <CardCVCInputBox>
        <LabelText>CVC</LabelText>
        <InputContainer>
          <Input
            maxLength={4}
            placeholder="123"
            value={cardCVC}
            onChange={onCardCVCChange}
            onBlur={onCardCVCBlur}
            onFocus={onCardCVCFocus}
          />
        </InputContainer>
        <ErrorMessage message={errorMessage}></ErrorMessage>
      </CardCVCInputBox>
    </CardCVCInputContainer>
  );
}
