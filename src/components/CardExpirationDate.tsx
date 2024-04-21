import { useState } from "react";
import Input from "./atoms/Input";
import { TitleText, CaptionText, LabelText } from "./atoms/text";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

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

  const isInvalidNumber = (numbers: string) => {
    if (numbers.length !== 0 && !Number.isInteger(Number(numbers))) {
      setErrorMessage("숫자만 입력해주세요");
      return true;
    }
    setErrorMessage("");
    return false;
  };

  const isInvalidLength = (numbers: string) => {
    if (numbers.length !== 2) {
      setErrorMessage("두 자리 수를 입력해주세요");
      return true;
    }
    setErrorMessage("");
    return false;
  };

  const isInvalidMonth = (numbers: string) => {
    if (Number(numbers) < 1 || Number(numbers) > 12) {
      setErrorMessage("1~12월 중 하나를 입력해주세요");
      return true;
    }
    setErrorMessage("");
    return false;
  };

  const isInvalidYear = (numbers: string) => {
    if (Number(numbers) < 24) {
      setErrorMessage("유효한 년도를 입력해주세요");
      return true;
    }
    setErrorMessage("");
    return false;
  };

  const onChangeMonthInput = (value: string) => {
    const newCardExpirationMonth = cardExpirationMonth;

    newCardExpirationMonth.value = value;
    newCardExpirationMonth.isError = isInvalidNumber(value);

    onChangeCardInfo(newCardExpirationMonth, "cardExpirationMonth");
  };

  const onBlurMonthInput = (value: string) => {
    const newCardExpirationMonth = cardExpirationMonth;

    newCardExpirationMonth.value = value;
    newCardExpirationMonth.isError =
      isInvalidMonth(value) || isInvalidNumber(value) || isInvalidLength(value);

    onChangeCardInfo(newCardExpirationMonth, "cardExpirationMonth");
  };

  const onChangeYearInput = (value: string) => {
    const newCardExpirationYear = cardExpirationYear;

    newCardExpirationYear.value = value;
    newCardExpirationYear.isError = isInvalidNumber(value);

    onChangeCardInfo(newCardExpirationYear, "cardExpirationYear");
  };

  const onBlurYearInput = (value: string) => {
    const newCardExpirationYear = cardExpirationYear;

    newCardExpirationYear.value = value;
    newCardExpirationYear.isError =
      isInvalidYear(value) || isInvalidNumber(value) || isInvalidLength(value);

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
