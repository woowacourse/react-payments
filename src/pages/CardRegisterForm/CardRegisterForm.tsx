import { INPUT_INFO_TITLE, INPUT_INFO_SUBTITLE } from "@/constants/condition";
import S from "./CardRegisterForm.styled";
import CardNumberInputField from "@/pages/CardRegisterForm/CardNumberInputField";
import ExpirationDateInputField from "@/pages/CardRegisterForm/ExpirationDateInputField";
import OwnerNameInputField from "@/pages/CardRegisterForm/OwnerNameInputField";
import useInput from "@/hooks/useInput";

interface Props {
  cardNumbersReduceds: ReturnType<typeof useInput>[];
  expirationDateReduceds: ReturnType<typeof useInput>[];
  ownerNameReduceds: ReturnType<typeof useInput>[];
}

const CardRegisterForm = ({ cardNumbersReduceds, expirationDateReduceds, ownerNameReduceds }: Props) => {
  return (
    <S.CardFormWrapper>
      {/*카드 번호*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.CARD_NUMBERS}</S.InputTitle>
          <S.InputSubtitle>{INPUT_INFO_SUBTITLE.CARD_NUMBERS}</S.InputSubtitle>
        </S.TitleWrapper>
        <CardNumberInputField reduceds={cardNumbersReduceds} />
      </S.InputFieldWithInfo>

      {/*유효 기간*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.EXPIRATION_DATE}</S.InputTitle>
          <S.InputSubtitle>{INPUT_INFO_SUBTITLE.EXPIRATION_DATE}</S.InputSubtitle>
        </S.TitleWrapper>
        <ExpirationDateInputField reduceds={expirationDateReduceds} />
      </S.InputFieldWithInfo>

      {/*소유자 이름*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.OWNER_NAME}</S.InputTitle>
        </S.TitleWrapper>
        <OwnerNameInputField reduceds={ownerNameReduceds} />
      </S.InputFieldWithInfo>
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
