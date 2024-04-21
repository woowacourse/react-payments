import { useState } from "react";
import Input from "./atoms/Input";
import { TitleText, CaptionText, LabelText } from "./atoms/text";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";
import {
  executeValidators,
  isInvalidDateLength,
  isInvalidMonth,
  isInvalidNumber,
  isInvalidYear,
} from "../utils/validators";

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

interface Props {
  cardExpirationMonth: CardInfoValue;
  cardExpirationYear: CardInfoValue;
  onChangeCardInfo: (inputValue: CardInfoValue, inputId: string) => void;
}

export default function CardExpirationDate({
  cardExpirationMonth,
  cardExpirationYear,
  onChangeCardInfo,
}: Props) {
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeMonthInput = (value: string) => {
    const newCardExpirationMonth = cardExpirationMonth;
    const validateResult = isInvalidNumber(value);

    newCardExpirationMonth.value = value;
    newCardExpirationMonth.isError = validateResult.isError;
    setErrorMessage(validateResult.message);
    onChangeCardInfo(newCardExpirationMonth, "cardExpirationMonth");
  };

  const onBlurMonthInput = (value: string) => {
    const newCardExpirationMonth = cardExpirationMonth;
    const validateResult = executeValidators(
      [isInvalidNumber, isInvalidDateLength, isInvalidMonth],
      value
    );

    newCardExpirationMonth.value = value;
    newCardExpirationMonth.isError = validateResult.isError;
    setErrorMessage(validateResult.message);
    onChangeCardInfo(newCardExpirationMonth, "cardExpirationMonth");
  };

  const onChangeYearInput = (value: string) => {
    const newCardExpirationYear = cardExpirationYear;
    const validateResult = isInvalidNumber(value);

    newCardExpirationYear.value = value;
    newCardExpirationYear.isError = validateResult.isError;
    setErrorMessage(validateResult.message);
    onChangeCardInfo(newCardExpirationYear, "cardExpirationYear");
  };

  const onBlurYearInput = (value: string) => {
    const newCardExpirationYear = cardExpirationYear;
    const validateResult = executeValidators(
      [isInvalidNumber, isInvalidDateLength, isInvalidYear],
      value
    );

    newCardExpirationYear.value = value;
    newCardExpirationYear.isError = validateResult.isError;
    setErrorMessage(validateResult.message);
    onChangeCardInfo(newCardExpirationYear, "cardExpirationYear");
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
            value={cardExpirationMonth.value}
            isError={cardExpirationMonth.isError}
            onChangeInput={(value) => onChangeMonthInput(value)}
            onBlurInput={(value) => onBlurMonthInput(value)}
          />
          <Input
            maxLength={2}
            placeholder="YY"
            value={cardExpirationYear.value}
            isError={cardExpirationYear.isError}
            onChangeInput={(value) => onChangeYearInput(value)}
            onBlurInput={(value) => onBlurYearInput(value)}
          />
        </InputContainer>
        <ErrorMessage message={errorMessage}></ErrorMessage>
      </CardDateBox>
    </CardDateContainer>
  );
}
