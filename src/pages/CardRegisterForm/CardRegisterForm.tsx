import { INPUT_INFO_TITLE, INPUT_INFO_SUBTITLE, Company } from "@/constants/condition";
import S from "./CardRegisterForm.styled";
import CardNumberInputField from "@/pages/CardRegisterForm/CardNumberInputField";
import ExpirationDateInputField from "@/pages/CardRegisterForm/ExpirationDateInputField";
import OwnerNameInputField from "@/pages/CardRegisterForm/OwnerNameInputField";
import useInput from "@/hooks/useInput";
import PasswordInputField from "./PasswordInputField";
import CVCInputField from "./CVCInputField";
import CardCompanyInputField from "./CardCompanyInputField";

type Reduceds = ReturnType<typeof useInput>[];
interface Props {
  cardNumbersReduceds: Reduceds;
  expirationDateReduceds: Reduceds;
  ownerNameReduceds: Reduceds;
  CVCReduceds: Reduceds;
  passwordReduceds: Reduceds;
  setIsCVCFocused?: React.Dispatch<React.SetStateAction<boolean>>;
  setCardCompany?: React.Dispatch<React.SetStateAction<Company>>;
}

const CardRegisterForm = ({
  cardNumbersReduceds,
  expirationDateReduceds,
  ownerNameReduceds,
  CVCReduceds,
  passwordReduceds,
  setIsCVCFocused,
  setCardCompany,
}: Props) => {
  const reducedsCollection: Reduceds[] = [
    cardNumbersReduceds,
    expirationDateReduceds,
    ownerNameReduceds,
    CVCReduceds,
    passwordReduceds,
  ];
  const isValid = (reduceds: Reduceds) => reduceds.every((reduced) => reduced[0].isValid);
  const isValidTo = (index: number) => reducedsCollection.slice(0, index + 1).every((reduceds) => isValid(reduceds));
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

      {/* 카드회사명 */}
      {isValidTo(0) && (
        <S.InputFieldWithInfo>
          <S.TitleWrapper>
            <S.InputTitle>{INPUT_INFO_TITLE.CARD_COMPANY}</S.InputTitle>
            <S.InputSubTitle>{INPUT_INFO_SUBTITLE.CARD_COMPANY}</S.InputSubTitle>
          </S.TitleWrapper>
          <CardCompanyInputField setCardCompany={setCardCompany} />
        </S.InputFieldWithInfo>
      )}
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
