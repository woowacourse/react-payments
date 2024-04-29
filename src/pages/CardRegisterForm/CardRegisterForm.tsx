import { INPUT_INFO_TITLE, INPUT_INFO_SUBTITLE } from "@/constants/condition";
import S from "./CardRegisterForm.styled";
import CardNumberInputField from "@/pages/CardRegisterForm/CardNumberInputField";
import ExpirationDateInputField from "@/pages/CardRegisterForm/ExpirationDateInputField";
import OwnerNameInputField from "@/pages/CardRegisterForm/OwnerNameInputField";
import useInput from "@/hooks/useInput";
import PasswordInputField from "./PasswordInputField";
import CVCInputField from "./CVCInputField";
import CardCompanyInputField from "./CardCompanyInputField";

type InputState = ReturnType<typeof useInput>;
interface Props {
  cardNumbersStates: InputState[];
  expirationDateStates: InputState[];
  ownerNameStates: InputState[];
  CVCStates: InputState[];
  passwordStates: InputState[];
  cardCompanyStates: InputState[];
  setIsCVCFocused?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardRegisterForm = ({
  cardNumbersStates,
  expirationDateStates,
  ownerNameStates,
  CVCStates,
  passwordStates,
  cardCompanyStates,
  setIsCVCFocused,
}: Props) => {
  const statesCollection: InputState[][] = [
    cardNumbersStates,
    cardCompanyStates,
    expirationDateStates,
    ownerNameStates,
    CVCStates,
    passwordStates,
  ];
  const isValid = (states: InputState[]) => states.every((state) => state.isValid);
  const isFilled = (states: InputState[]) => states.every((state) => state.value.length !== 0);
  const isCompleteTo = (index: number) =>
    statesCollection.slice(0, index + 1).every((reduceds) => isValid(reduceds) && isFilled(reduceds));
  return (
    <S.CardFormWrapper>
      {/* 비밀번호 앞 2자리 */}
      {isCompleteTo(4) && (
        <S.InputFieldWithInfo>
          <S.TitleWrapper>
            <S.InputTitle>{INPUT_INFO_TITLE.PASSWORD}</S.InputTitle>
            <S.InputSubTitle>{INPUT_INFO_SUBTITLE.PASSWORD}</S.InputSubTitle>
          </S.TitleWrapper>
          <PasswordInputField inputStates={passwordStates} />
        </S.InputFieldWithInfo>
      )}

      {/* CVC */}
      {isCompleteTo(3) && (
        <S.InputFieldWithInfo>
          <S.TitleWrapper>
            <S.InputTitle>{INPUT_INFO_TITLE.CVC}</S.InputTitle>
          </S.TitleWrapper>
          <CVCInputField inputStates={CVCStates} setIsFocused={setIsCVCFocused} />
        </S.InputFieldWithInfo>
      )}

      {/* 소유자 이름 */}
      {isCompleteTo(2) && (
        <S.InputFieldWithInfo>
          <S.TitleWrapper>
            <S.InputTitle>{INPUT_INFO_TITLE.OWNER_NAME}</S.InputTitle>
          </S.TitleWrapper>
          <OwnerNameInputField inputStates={ownerNameStates} />
        </S.InputFieldWithInfo>
      )}
      {/* 유효 기간 */}
      {isCompleteTo(1) && (
        <S.InputFieldWithInfo>
          <S.TitleWrapper>
            <S.InputTitle>{INPUT_INFO_TITLE.EXPIRATION_DATE}</S.InputTitle>
            <S.InputSubTitle>{INPUT_INFO_SUBTITLE.EXPIRATION_DATE}</S.InputSubTitle>
          </S.TitleWrapper>
          <ExpirationDateInputField inputStates={expirationDateStates} />
        </S.InputFieldWithInfo>
      )}

      {/* 카드회사명 */}
      {isCompleteTo(0) && (
        <S.InputFieldWithInfo>
          <S.TitleWrapper>
            <S.InputTitle>{INPUT_INFO_TITLE.CARD_COMPANY}</S.InputTitle>
            <S.InputSubTitle>{INPUT_INFO_SUBTITLE.CARD_COMPANY}</S.InputSubTitle>
          </S.TitleWrapper>
          <CardCompanyInputField cardCompanyStates={cardCompanyStates} />
        </S.InputFieldWithInfo>
      )}
      {/* 카드 번호 */}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.CARD_NUMBERS}</S.InputTitle>
          <S.InputSubTitle>{INPUT_INFO_SUBTITLE.CARD_NUMBERS}</S.InputSubTitle>
        </S.TitleWrapper>
        <CardNumberInputField inputState={cardNumbersStates} />
      </S.InputFieldWithInfo>
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
