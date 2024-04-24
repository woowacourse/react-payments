import { useEffect } from "react";
import Input from "../atoms/Input/Input";
import { TitleText, CaptionText, LabelText } from "../atoms/text";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as S from "./style";
import useCardDateInput from "../../hooks/useCardDateInput";

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
  const { cardMonth, cardYear, validateMessage } = useCardDateInput();

  useEffect(() => {
    const newCardExpirationMonth = cardExpirationMonth;

    newCardExpirationMonth.value = cardMonth.value;
    newCardExpirationMonth.isError = cardMonth.validateMessage !== "";

    onChangeCardInfo(newCardExpirationMonth, "cardExpirationMonth");
  }, [cardMonth, validateMessage]);

  useEffect(() => {
    const newCardExpirationYear = cardExpirationYear;

    newCardExpirationYear.value = cardYear.value;
    newCardExpirationYear.isError = cardYear.validateMessage !== "";

    onChangeCardInfo(newCardExpirationYear, "cardExpirationYear");
  }, [cardYear, validateMessage]);

  return (
    <S.CardDateContainer>
      <div>
        <TitleText>카드 유효기간을 입력해 주세요</TitleText>
        <CaptionText>월/년도(MMYY)를 순서대로 입력해 주세요.</CaptionText>
      </div>
      <S.CardDateBox>
        <LabelText htmlFor="cardExpirationMonth">유효기간</LabelText>
        <S.InputContainer>
          <Input
            id="cardExpirationMonth"
            ariaLabel="유효기간 월"
            maxLength={2}
            placeholder="MM"
            value={cardExpirationMonth.value}
            isError={cardExpirationMonth.isError}
            onChange={cardMonth.onChange}
            onBlur={cardMonth.onBlur}
          />
          <Input
            id="cardExpirationYear"
            ariaLabel="유효기간 연도"
            maxLength={2}
            placeholder="YY"
            value={cardExpirationYear.value}
            isError={cardExpirationYear.isError}
            onChange={cardYear.onChange}
            onBlur={cardYear.onBlur}
          />
        </S.InputContainer>
        <ErrorMessage message={validateMessage} />
      </S.CardDateBox>
    </S.CardDateContainer>
  );
}
