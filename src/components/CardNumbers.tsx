import { useState } from "react";
import Input from "./atoms/Input";
import { TitleText, CaptionText, LabelText } from "./atoms/text";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";
import {
  executeValidators,
  isInvalidCardNumberLength,
  isInvalidNumber,
} from "../utils/validators";

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
  cardNumbers: CardInfoValue[];
  onChangeCardInfo: (inputValue: CardInfoValue[], inputId: string) => void;
}

export default function CardNumbers({ cardNumbers, onChangeCardInfo }: Props) {
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeInput = (cardNumberIdx: number, value: string) => {
    const newCardNumbers = [...cardNumbers];
    const validateResult = isInvalidNumber(value);

    newCardNumbers[cardNumberIdx].value = value;
    newCardNumbers[cardNumberIdx].isError = validateResult.isError;
    setErrorMessage(validateResult.message);
    onChangeCardInfo(newCardNumbers, "cardNumbers");
  };

  const onBlurInput = (cardNumberIdx: number, value: string) => {
    const newCardNumbers = [...cardNumbers];
    const validateResult = executeValidators(
      [isInvalidNumber, isInvalidCardNumberLength],
      value
    );

    newCardNumbers[cardNumberIdx].value = value;
    newCardNumbers[cardNumberIdx].isError = validateResult.isError;
    setErrorMessage(validateResult.message);
    onChangeCardInfo(newCardNumbers, "cardNumbers");
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
          {cardNumbers.map((cardNumber, idx) => {
            return (
              <Input
                maxLength={4}
                placeholder="1234"
                value={cardNumber.value}
                isError={cardNumber.isError}
                onChangeInput={(value) => onChangeInput(idx, value)}
                onBlurInput={(value) => onBlurInput(idx, value)}
              />
            );
          })}
        </InputContainer>
        <ErrorMessage message={errorMessage}></ErrorMessage>
      </CardNumberBox>
    </CardNumbersContainer>
  );
}
