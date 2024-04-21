import { useState } from "react";
import Input from "./atoms/Input";
import { TitleText, LabelText } from "./atoms/text";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

const CardOwnerNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const CardOwnerNameBox = styled.div`
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
  cardOwnerName: CardInfoValue;
  onChangeCardInfo: (inputValue: CardInfoValue, inputId: string) => void;
}

export default function CardOwnerName({
  cardOwnerName,
  onChangeCardInfo,
}: Props) {
  const [errorMessage, setErrorMessage] = useState("");

  const isInvalidName = (upperName: string) => {
    const pattern: RegExp = /^[A-Z\s]*$/; // 영문자 대문자 또는 공백만 허용

    if (upperName.length !== 0 && !pattern.test(upperName)) {
      setErrorMessage("영문자만 입력해주세요");
      return true;
    }

    setErrorMessage("");
    return false;
  };

  const isInvalidLength = (value: string) => {
    if (value.length < 1) {
      setErrorMessage("이름을 입력해주세요");
      return true;
    }
    setErrorMessage("");
    return false;
  };

  const onChangeNameInput = (value: string) => {
    const newCardOwnerName = cardOwnerName;
    const upperName = value.toUpperCase();

    newCardOwnerName.value = upperName;
    newCardOwnerName.isError = isInvalidName(upperName);

    onChangeCardInfo(newCardOwnerName, "cardOwnerName");
  };

  const onBlurNameInput = (value: string) => {
    const newCardOwnerName = cardOwnerName;
    const upperName = value.toUpperCase();

    newCardOwnerName.value = upperName;
    newCardOwnerName.isError =
      isInvalidName(upperName) || isInvalidLength(upperName);

    onChangeCardInfo(newCardOwnerName, "cardOwnerName");
  };

  return (
    <CardOwnerNameContainer>
      <TitleText>카드 소유자 이름을 입력해 주세요</TitleText>
      <CardOwnerNameBox>
        <LabelText>소유자 이름</LabelText>
        <InputContainer>
          <Input
            maxLength={15}
            placeholder="JOHN DOE"
            value={cardOwnerName.value}
            isError={cardOwnerName.isError}
            onChangeInput={(value) => onChangeNameInput(value)}
            onBlurInput={(value) => onBlurNameInput(value)}
          />
        </InputContainer>
        <ErrorMessage message={errorMessage}></ErrorMessage>
      </CardOwnerNameBox>
    </CardOwnerNameContainer>
  );
}
