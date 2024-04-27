import Input from "../atoms/Input/Input";
import { TitleText, CaptionText, LabelText } from "../atoms/text";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as S from "./style";

interface Props {
  cardNumbers: CardNumbersType;
}

export default function CardNumbers({ cardNumbers }: Props) {
  const errorMessage = cardNumbers
    .map((cardNumber) => {
      return cardNumber.validateMessage;
    })
    .find((msg) => msg !== "");

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
                isError={cardNumber.validateMessage !== ""}
                onChange={cardNumber.onChange}
                onBlur={cardNumber.onBlur}
              />
            );
          })}
        </S.InputContainer>
        <ErrorMessage message={errorMessage || ""} />
      </S.CardNumberBox>
    </S.CardNumbersContainer>
  );
}
