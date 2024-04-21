import { useState } from "react";
import Input from "../atoms/Input";
import { TitleText, LabelText } from "../atoms/text";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  executeValidators,
  isInvalidNameLength,
  isInvalidOwnerName,
} from "../../utils/validators";
import * as S from "./style";

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
    <S.CardOwnerNameContainer>
      <TitleText>카드 소유자 이름을 입력해 주세요</TitleText>
      <S.CardOwnerNameBox>
        <LabelText>소유자 이름</LabelText>
        <S.InputContainer>
          <Input
            maxLength={15}
            placeholder="JOHN DOE"
            value={cardOwnerName.value}
            isError={cardOwnerName.isError}
            onChangeInput={(value) => onChangeNameInput(value)}
            onBlurInput={(value) => onBlurNameInput(value)}
          />
        </S.InputContainer>
        <ErrorMessage message={errorMessage}></ErrorMessage>
      </S.CardOwnerNameBox>
    </S.CardOwnerNameContainer>
  );
}
