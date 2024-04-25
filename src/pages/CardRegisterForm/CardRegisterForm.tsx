import { INPUT_INFO_TITLE, INPUT_INFO_SUBTITLE } from "@/constants/condition";
import S from "./CardRegisterForm.styled";
import CardNumberInputField from "@/pages/CardRegisterForm/CardNumberInputField";
import ExpirationDateInputField from "@/pages/CardRegisterForm/ExpirationDateInputField";
import OwnerNameInputField from "@/pages/CardRegisterForm/OwnerNameInputField";
import useInput from "@/hooks/useInput";
import PasswordInputField from "./PasswordInputField";
import CVCInputField from "./CVCInputField";

interface Props {
  cardNumbersReduceds: ReturnType<typeof useInput>[];
  expirationDateReduceds: ReturnType<typeof useInput>[];
  ownerNameReduceds: ReturnType<typeof useInput>[];
  CVCReduceds: ReturnType<typeof useInput>[];
  passwordReduceds: ReturnType<typeof useInput>[];
  setIsCVCFocused?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardRegisterForm = ({
  cardNumbersReduceds,
  expirationDateReduceds,
  ownerNameReduceds,
  CVCReduceds,
  setIsCVCFocused,
  passwordReduceds,
}: Props) => {
  return (
    <S.CardFormWrapper>
      {/* 카드 번호 */}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.CARD_NUMBERS}</S.InputTitle>
          <S.InputSubTitle>{INPUT_INFO_SUBTITLE.CARD_NUMBERS}</S.InputSubTitle>
        </S.TitleWrapper>
        <CardNumberInputField reduceds={cardNumbersReduceds} />
      </S.InputFieldWithInfo>

      {/* 유효 기간 */}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.EXPIRATION_DATE}</S.InputTitle>
          <S.InputSubTitle>{INPUT_INFO_SUBTITLE.EXPIRATION_DATE}</S.InputSubTitle>
        </S.TitleWrapper>
        <ExpirationDateInputField reduceds={expirationDateReduceds} />
      </S.InputFieldWithInfo>

      {/* 소유자 이름 */}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.OWNER_NAME}</S.InputTitle>
        </S.TitleWrapper>
        <OwnerNameInputField reduceds={ownerNameReduceds} />
      </S.InputFieldWithInfo>

      {/* CVC */}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.CVC}</S.InputTitle>
        </S.TitleWrapper>
        <CVCInputField reduceds={CVCReduceds} setIsFocused={setIsCVCFocused} />
      </S.InputFieldWithInfo>

      {/* 비밀번호 앞 2자리 */}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.PASSWORD}</S.InputTitle>
          <S.InputSubTitle>{INPUT_INFO_SUBTITLE.PASSWORD}</S.InputSubTitle>
        </S.TitleWrapper>
        <PasswordInputField reduceds={passwordReduceds} />
      </S.InputFieldWithInfo>
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
