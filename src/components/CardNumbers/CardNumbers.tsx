import { useState } from "react";
import Input from "../atoms/Input/Input";
import { TitleText, CaptionText, LabelText } from "../atoms/text";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  executeValidators,
  isInvalidCardNumberLength,
  isInvalidNumber,
} from "../../utils/validators";
import * as S from "./style";

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
    <S.CardNumbersContainer>
      <div>
        <TitleText>결제할 카드 번호를 입력해 주세요</TitleText>
        <CaptionText>본인 명의의 카드만 결제 가능합니다.</CaptionText>
      </div>
      <S.CardNumberBox>
        <LabelText>카드 번호</LabelText>
        <S.InputContainer>
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
        </S.InputContainer>
        <ErrorMessage message={errorMessage}></ErrorMessage>
      </S.CardNumberBox>
    </S.CardNumbersContainer>
  );
}
