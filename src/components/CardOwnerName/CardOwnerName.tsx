import { CARD_INFO } from "../../constants/cardInformation";
import { UseInputReturn } from '../../hooks/useInput';
import Input from "../atoms/Input/Input";
import { SubTitleText, LabelText } from "../atoms/text";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as S from "./style";

interface Props {
  cardOwnerName: UseInputReturn;
}

export default function CardOwnerName({ cardOwnerName }: Props) {
  return (
    <S.CardOwnerNameContainer>
      <SubTitleText>카드 소유자 이름을 입력해 주세요</SubTitleText>
      <S.CardOwnerNameBox>
        <LabelText htmlFor="cardOwnerName">소유자 이름</LabelText>
        <S.InputContainer>
          <Input
            id="cardOwnerName"
            ref={cardOwnerName.ref}
            maxLength={CARD_INFO.NAME_LENGTH}
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
