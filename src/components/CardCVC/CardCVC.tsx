import Input from "../atoms/Input/Input";
import { SubTitleText, LabelText } from "../atoms/text";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as S from "./style";

interface Props {
  cardCVC: UseInputReturn;
  handlePreviewOnFocus: () => void;
  handlePreviewOnBlur: () => void;
}

export default function CardCVC({
  cardCVC,
  handlePreviewOnFocus,
  handlePreviewOnBlur,
}: Props) {
  return (
    <S.CardOwnerNameContainer>
      <SubTitleText>CVC</SubTitleText>
      <S.CardOwnerNameBox>
        <LabelText htmlFor="cardCVC">CVC</LabelText>
        <S.InputContainer>
          <Input
            id="cardCVC"
            ref={cardCVC.ref}
            maxLength={3}
            placeholder="123"
            value={cardCVC.value}
            isError={cardCVC.validateMessage !== ""}
            onChange={cardCVC.onChange}
            onBlur={(e) => {
              cardCVC.onBlur(e);
              handlePreviewOnBlur();
            }}
            onFocus={handlePreviewOnFocus}
          />
        </S.InputContainer>
        <ErrorMessage message={cardCVC.validateMessage || ""} />
      </S.CardOwnerNameBox>
    </S.CardOwnerNameContainer>
  );
}
