import { ChangeEvent, FocusEvent } from "react";
import useInputs from "@/hooks/useInputs";
import { PLACE_HOLDER, INPUT_INFO_TITLE, INPUT_INFO_SUBTITLE, INPUT_LABEL } from "@/constants/condition";
import InputField from "@/components/InputField/InputField";
import Input from "@/components/Input/Input";
import S from "./style";

interface Props {
  cardNumbersState: ReturnType<typeof useInputs>;
  expiredPeriodState: ReturnType<typeof useInputs>;
  ownerNameState: ReturnType<typeof useInputs>;
}

const CardRegisterForm = ({ cardNumbersState, expiredPeriodState, ownerNameState }: Props) => {
  const {
    inputs: cardNumbers,
    onChange: onChangeCardNumbers,
    errorMessages: cardNumbersErrorMessages,
    onBlur: onBlurCardNumbers,
  } = cardNumbersState;

  const {
    inputs: expirationPeriod,
    onChange: onChangeExpirationPeriod,
    errorMessages: expirationPeriodErrorMessages,
    onBlur: onBlurExpirationPeriod,
  } = expiredPeriodState;

  const { onChange: onChangeOwnerName, errorMessages: ownerErrorMessages } = ownerNameState;

  const expirationPlaceholder = [PLACE_HOLDER.EXPIRATION_MONTH, PLACE_HOLDER.EXPIRATION_YEAR];

  const findFirstErrorMessageIndex = (errorMessages: string[]) => {
    const targetIndex = errorMessages.findIndex((message) => message !== "");
    return targetIndex;
  };

  return (
    <S.CardFormWrapper>
      {/*카드 번호*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.CARD_NUMBERS}</S.InputTitle>
          <S.InputSubtitle>{INPUT_INFO_SUBTITLE.CARD_NUMBERS}</S.InputSubtitle>
        </S.TitleWrapper>
        <InputField>
          {/* label={INPUT_LABEL.CARD_NUMBERS}
          errorMessage={
            cardNumbersErrorMessages[
              findFirstErrorMessageIndex(cardNumbersErrorMessages)
            ]
          } */}

          <InputField.Label>{INPUT_LABEL.CARD_NUMBERS}</InputField.Label>
          <InputField.Inputs>
            {cardNumbers.map((_, index) => (
              <Input
                type="number"
                key={index}
                placeholder={PLACE_HOLDER.CARD_NUMBERS}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  onChangeCardNumbers(e, index);
                }}
                onBlur={(e: FocusEvent<Element, Element>) => {
                  onBlurCardNumbers(index);
                }}
                isError={findFirstErrorMessageIndex(cardNumbersErrorMessages) === index}
              />
            ))}
          </InputField.Inputs>
          <InputField.ErrorMessage>
            {cardNumbersErrorMessages[findFirstErrorMessageIndex(cardNumbersErrorMessages)]}
          </InputField.ErrorMessage>
        </InputField>
      </S.InputFieldWithInfo>

      {/*유효 기간*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.EXPIRATION_DATE}</S.InputTitle>
          <S.InputSubtitle>{INPUT_INFO_SUBTITLE.EXPIRATION_DATE}</S.InputSubtitle>
        </S.TitleWrapper>
        <InputField>
          <InputField.Label>{INPUT_LABEL.EXPIRATION_DATE}</InputField.Label>
          <InputField.Inputs>
            {expirationPeriod.map((_, index) => (
              <Input
                type="number"
                key={index}
                placeholder={expirationPlaceholder[index]}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  onChangeExpirationPeriod(e, index);
                }}
                onBlur={(e: FocusEvent<Element, Element>) => {
                  onBlurExpirationPeriod(index);
                }}
                isError={findFirstErrorMessageIndex(expirationPeriodErrorMessages) === index}
              />
            ))}
          </InputField.Inputs>
          <InputField.ErrorMessage>
            {expirationPeriodErrorMessages[findFirstErrorMessageIndex(expirationPeriodErrorMessages)]}
          </InputField.ErrorMessage>
        </InputField>
      </S.InputFieldWithInfo>

      {/*소유자 이름*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.OWNER_NAME}</S.InputTitle>
        </S.TitleWrapper>
        <InputField>
          <InputField.Label>{INPUT_LABEL.OWNER_NAME}</InputField.Label>
          <InputField.Inputs>
            <InputField.Input
              placeholder={PLACE_HOLDER.OWNER_NAME}
              isError={ownerErrorMessages[0] !== ""}
              type="text"
              maxLength={30}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.toUpperCase();
                onChangeOwnerName(e, 0);
              }}
            />
          </InputField.Inputs>
          <InputField.ErrorMessage>{ownerErrorMessages[0]}</InputField.ErrorMessage>
        </InputField>
      </S.InputFieldWithInfo>
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
