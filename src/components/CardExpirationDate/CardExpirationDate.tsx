import Input from "../atoms/Input/Input";
import { TitleText, CaptionText, LabelText } from "../atoms/text";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as S from "./style";

interface Props {
  cardExpirationMonth: UseInputReturn;
  cardExpirationYear: UseInputReturn;
}

export default function CardExpirationDate({
  cardExpirationMonth,
  cardExpirationYear,
}: Props) {
  const errorMessage = [cardExpirationMonth, cardExpirationYear]
    .map((date) => {
      return date.validateMessage;
    })
    .find((msg) => msg !== "");

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
            isError={cardExpirationMonth.validateMessage !== ""}
            onChange={cardExpirationMonth.onChange}
            onBlur={cardExpirationMonth.onBlur}
          />
          <Input
            id="cardExpirationYear"
            ariaLabel="유효기간 연도"
            maxLength={2}
            placeholder="YY"
            value={cardExpirationYear.value}
            isError={cardExpirationYear.validateMessage !== ""}
            onChange={cardExpirationYear.onChange}
            onBlur={cardExpirationYear.onBlur}
          />
        </S.InputContainer>
        <ErrorMessage message={errorMessage || ""} />
      </S.CardDateBox>
    </S.CardDateContainer>
  );
}
