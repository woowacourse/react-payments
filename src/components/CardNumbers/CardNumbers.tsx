import { useEffect } from "react";
import Input from "../atoms/Input/Input";
import { TitleText, CaptionText, LabelText } from "../atoms/text";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import useCardNumberInput from "../../hooks/useCardNumber";
import * as S from "./style";

interface Props {
  cardNumbers: CardInfoValue[];
  onChangeCardInfo: (inputValue: CardInfoValue[], inputId: string) => void;
}

export default function CardNumbers({ cardNumbers, onChangeCardInfo }: Props) {
  const {
    cardNumber1,
    cardNumber2,
    cardNumber3,
    cardNumber4,
    validateMessage,
  } = useCardNumberInput();
  const inputCardNumbers = [cardNumber1, cardNumber2, cardNumber3, cardNumber4];

  useEffect(() => {
    const newCardNumber = cardNumbers;

    newCardNumber.forEach((cardNumber, idx) => {
      cardNumber.value = inputCardNumbers[idx].value;
      cardNumber.isError = inputCardNumbers[idx].validateMessage !== "";
    });

    onChangeCardInfo(newCardNumber, "cardNumber");
  }, [cardNumber1, cardNumber2, cardNumber3, cardNumber4, validateMessage]);

  return (
    <S.CardNumbersContainer>
      <div>
        <TitleText>결제할 카드 번호를 입력해 주세요</TitleText>
        <CaptionText>본인 명의의 카드만 결제 가능합니다.</CaptionText>
      </div>
      <S.CardNumberBox>
        <LabelText htmlFor="cardNumber1">카드 번호</LabelText>
        <S.InputContainer>
          {cardNumbers.map((cardNumber, idx) => {
            return (
              <Input
                id={`cardNumber${idx + 1}`}
                key={`cardNumber${idx + 1}`}
                ariaLabel={`카드번호${idx + 1}`}
                maxLength={4}
                placeholder="1234"
                value={cardNumber.value}
                isError={cardNumber.isError}
                onChange={inputCardNumbers[idx].onChange}
                onBlur={inputCardNumbers[idx].onBlur}
              />
            );
          })}
        </S.InputContainer>
        <ErrorMessage message={validateMessage} />
      </S.CardNumberBox>
    </S.CardNumbersContainer>
  );
}
