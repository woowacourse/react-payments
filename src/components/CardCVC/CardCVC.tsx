import Input from "../atoms/Input/Input";
import { TitleText, LabelText } from "../atoms/text";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as S from "./style";

interface Props {
  cardCVC: UseInputReturn;
}

export default function CardCVC({ cardCVC }: Props) {
  return (
    <S.CardOwnerNameContainer>
      <TitleText>CVC</TitleText>
      <S.CardOwnerNameBox>
        <LabelText htmlFor="cardCVC">CVC</LabelText>
        <S.InputContainer>
          <Input
            id="cardCVC"
            maxLength={3}
            placeholder="123"
            value={cardCVC.value}
            isError={cardCVC.validateMessage !== ""}
            onChange={cardCVC.onChange}
            onBlur={cardCVC.onBlur}
          />
        </S.InputContainer>
        <ErrorMessage message={cardCVC.validateMessage || ""} />
      </S.CardOwnerNameBox>
    </S.CardOwnerNameContainer>
  );
}
