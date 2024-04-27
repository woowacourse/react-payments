import { CARD_INFO } from "../../constants/cardInformation";
import { CardNumbersType } from "../../hooks/useCardForm";
import { getFirstValidateMessage } from "../../utils/getFirstValidateMessage";
import Input from "../atoms/Input/Input";
import { SubTitleText, CaptionText, LabelText } from "../atoms/text";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as S from "./style";

interface Props {
  cardNumbers: CardNumbersType;
}

export default function CardNumbers({ cardNumbers }: Props) {
  const errorMessage = getFirstValidateMessage(cardNumbers);

  return (
    <S.CardNumbersContainer>
      <div>
        <SubTitleText>결제할 카드 번호를 입력해 주세요</SubTitleText>
        <CaptionText>본인 명의의 카드만 결제 가능합니다.</CaptionText>
      </div>
      <S.CardNumberBox>
        <LabelText htmlFor="cardNumber1">카드 번호</LabelText>
        <S.InputContainer>
          {cardNumbers.map((cardNumber, idx) => {
            return (
              <Input
                ref={cardNumbers[idx].ref}
                id={`cardNumber${idx + 1}`}
                key={`cardNumber${idx + 1}`}
                ariaLabel={`카드번호${idx + 1}`}
                maxLength={CARD_INFO.NUMBER_LENGTH}
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
