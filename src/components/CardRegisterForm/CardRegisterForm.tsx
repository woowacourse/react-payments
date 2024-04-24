import { ChangeEvent, FocusEvent } from "react";
import useInputs from "@/hooks/useInputs";
import { PLACE_HOLDER, INPUT_INFO_TITLE, INPUT_INFO_SUBTITLE, INPUT_LABEL } from "@/constants/condition";
import InputField from "@/components/InputField/InputField";
import Input from "@/components/Input/Input";
import S from "./style";
import CardNumberInputField from "@/pages/CardNumberInputField";
import useInputField, { IndividualValidator } from "@/hooks/useInputField";
import ExpirationDateInputField from "@/pages/ExpirationDateInputField";
import OwnerNameInputField from "@/pages/OwnerNameInputField";

interface Props {
  cardNumbersState: ReturnType<typeof useInputField>;
  expiredPeriodState: ReturnType<typeof useInputField>;
  ownerNameState: ReturnType<typeof useInputField>;
}

const CardRegisterForm = ({ cardNumbersState, expiredPeriodState, ownerNameState }: Props) => {
  // const findFirstErrorMessageIndex = (errorMessages: string[]) => {
  //   const targetIndex = errorMessages.findIndex((message) => message !== "");
  //   return targetIndex;
  // };

  return (
    <S.CardFormWrapper>
      {/*카드 번호*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.CARD_NUMBERS}</S.InputTitle>
          <S.InputSubtitle>{INPUT_INFO_SUBTITLE.CARD_NUMBERS}</S.InputSubtitle>
        </S.TitleWrapper>
        <CardNumberInputField validationStates={cardNumbersState} />
      </S.InputFieldWithInfo>

      {/*유효 기간*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.CARD_NUMBERS}</S.InputTitle>
          <S.InputSubtitle>{INPUT_INFO_SUBTITLE.CARD_NUMBERS}</S.InputSubtitle>
        </S.TitleWrapper>
        <ExpirationDateInputField validationStates={expiredPeriodState} />
      </S.InputFieldWithInfo>
      {/*소유자 이름*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.CARD_NUMBERS}</S.InputTitle>
          <S.InputSubtitle>{INPUT_INFO_SUBTITLE.CARD_NUMBERS}</S.InputSubtitle>
        </S.TitleWrapper>
        <OwnerNameInputField validationStates={ownerNameState} />
      </S.InputFieldWithInfo>
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
