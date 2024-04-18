import { ChangeEvent } from "react";
import useInput from "@/hooks/useInput";
import {
  PLACE_HOLDER,
  INPUT_INFO_TITLE,
  INPUT_INFO_SUBTITLE,
  INPUT_LABEL,
} from "@/constants/condition";
import InputField from "@/components/InputField/InputField";
import Input from "@/components/Input/Input";
import S from "./style";

interface Props {
  cardNumbersState: ReturnType<typeof useInput>;
  expiredPeriodState: ReturnType<typeof useInput>;
  ownerNameState: ReturnType<typeof useInput>;
}

const CardRegisterForm = ({
  cardNumbersState,
  expiredPeriodState,
  ownerNameState,
}: Props) => {
  const {
    input: cardNumbers,
    onChange: onChangeCardNumbers,
    errorMessage: cardNumbersErrorMessage,
  } = cardNumbersState;

  const {
    input: expirationPeriod,
    onChange: onChangeExpirationPeriod,
    errorMessage: expirationPeriodErrorMessage,
  } = expiredPeriodState;

  const { onChange: onChangeOwnerName, errorMessage: ownerErrorMessage } =
    ownerNameState;

  const expirationPlaceholder = [
    PLACE_HOLDER.EXPIRATION_MONTH,
    PLACE_HOLDER.EXPIRATION_YEAR,
  ];

  return (
    <S.CardFormWrapper>
      {/*카드 번호*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.CARD_NUMBERS}</S.InputTitle>
          <S.InputSubtitle>{INPUT_INFO_SUBTITLE.CARD_NUMBERS}</S.InputSubtitle>
        </S.TitleWrapper>
        <InputField
          label={INPUT_LABEL.CARD_NUMBERS}
          errorMessage={cardNumbersErrorMessage}
        >
          {cardNumbers.map((_, index) => (
            <Input
              type="number"
              key={index}
              placeholder={PLACE_HOLDER.CARD_NUMBERS}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onChangeCardNumbers(e, index);
              }}
              isError={false}
            />
          ))}
        </InputField>
      </S.InputFieldWithInfo>

      {/*유효 기간*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.EXPIRATION_DATE}</S.InputTitle>
          <S.InputSubtitle>
            {INPUT_INFO_SUBTITLE.EXPIRATION_DATE}
          </S.InputSubtitle>
        </S.TitleWrapper>
        <InputField
          label={INPUT_LABEL.EXPIRATION_DATE}
          errorMessage={expirationPeriodErrorMessage}
        >
          {expirationPeriod.map((_, index) => (
            <Input
              type="number"
              key={index}
              placeholder={expirationPlaceholder[index]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onChangeExpirationPeriod(e, index);
              }}
              isError={false}
            />
          ))}
        </InputField>
      </S.InputFieldWithInfo>

      {/*소유자 이름*/}
      <S.InputFieldWithInfo>
        <S.TitleWrapper>
          <S.InputTitle>{INPUT_INFO_TITLE.OWNER_NAME}</S.InputTitle>
        </S.TitleWrapper>
        <InputField
          label={INPUT_LABEL.OWNER_NAME}
          errorMessage={ownerErrorMessage}
        >
          <Input
            placeholder={PLACE_HOLDER.OWNER_NAME}
            isError={false}
            type="text"
            maxLength={30}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              onChangeOwnerName(e, 0);
            }}
          />
        </InputField>
      </S.InputFieldWithInfo>
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
