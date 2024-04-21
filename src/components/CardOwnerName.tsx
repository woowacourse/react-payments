import { useState } from "react";
import Input from "./atoms/Input";
import { TitleText, LabelText } from "./atoms/text";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";
import {
  executeValidators,
  isInvalidNameLength,
  isInvalidOwnerName,
} from "../utils/validators";

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

  const onChangeNameInput = (value: string) => {
    const newCardOwnerName = cardOwnerName;
    const upperName = value.toUpperCase();
    const validateResult = isInvalidOwnerName(upperName);

    newCardOwnerName.value = upperName;
    newCardOwnerName.isError = validateResult.isError;
    setErrorMessage(validateResult.message);
    onChangeCardInfo(newCardOwnerName, "cardOwnerName");
  };

  const onBlurNameInput = (value: string) => {
    const newCardOwnerName = cardOwnerName;
    const upperName = value.toUpperCase();
    const validateResult = executeValidators(
      [isInvalidOwnerName, isInvalidNameLength],
      value
    );

    newCardOwnerName.value = upperName;
    newCardOwnerName.isError = validateResult.isError;
    setErrorMessage(validateResult.message);
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
