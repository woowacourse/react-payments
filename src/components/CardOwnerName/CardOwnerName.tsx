import Input from "../atoms/Input/Input";
import { TitleText, LabelText } from "../atoms/text";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as S from "./style";

interface Props {
  cardOwnerName: UseInputReturn;
}

export default function CardOwnerName({ cardOwnerName }: Props) {
  return (
    <S.CardOwnerNameContainer>
      <TitleText>카드 소유자 이름을 입력해 주세요</TitleText>
      <S.CardOwnerNameBox>
        <LabelText htmlFor="cardOwnerName">소유자 이름</LabelText>
        <S.InputContainer>
          <Input
            id="cardOwnerName"
            maxLength={15}
            placeholder="JOHN DOE"
            value={cardOwnerName.value}
            isError={cardOwnerName.validateMessage !== ""}
            onChange={cardOwnerName.onChange}
            onBlur={cardOwnerName.onBlur}
          />
        </S.InputContainer>
        <ErrorMessage message={cardOwnerName.validateMessage || ""} />
      </S.CardOwnerNameBox>
    </S.CardOwnerNameContainer>
  );
}
