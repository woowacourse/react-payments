import { ChangeEvent, FocusEvent } from "react";
import useInput from "@/hooks/useInput";
import InputField from "@/components/InputField/InputField";
import Input from "@/components/Input/Input";
import S from "./style";
import InputFieldHeader from "../InputFieldHeader/InputFieldHeader";
import {
  EXPIRATION_DATE_PLACEHOLDER,
  INPUT_INFO_SUBTITLE,
  INPUT_INFO_TITLE,
  INPUT_LABEL,
  PLACEHOLDER,
} from "@/constants/message";
import { MAX_LENGTH } from "@/constants/condition";

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
    errorMessages: cardNumbersErrorMessages,
    onBlur: onBlurCardNumbers,
  } = cardNumbersState;

  const {
    input: expirationPeriod,
    onChange: onChangeExpirationPeriod,
    errorMessages: expirationPeriodErrorMessages,
    onBlur: onBlurExpirationPeriod,
  } = expiredPeriodState;

  const { onChange: onChangeOwnerName, errorMessages: ownerNameErrorMessages } =
    ownerNameState;

  return (
    <S.CardFormWrapper>
      {/*카드 번호*/}
      <S.InputFieldWithInfo>
        <InputFieldHeader
          title={INPUT_INFO_TITLE.CARD_NUMBERS}
          subTitle={INPUT_INFO_SUBTITLE.CARD_NUMBERS}
        />
        <InputField
          label={INPUT_LABEL.CARD_NUMBERS}
          errorMessages={cardNumbersErrorMessages}
        >
          {cardNumbers.map((_, index) => (
            <Input
              type="number"
              key={index}
              placeholder={PLACEHOLDER.CARD_NUMBERS}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onChangeCardNumbers(e, index);
              }}
              onBlur={(e: FocusEvent<Element, Element>) => {
                onBlurCardNumbers(e, index);
              }}
              isError={!!cardNumbersErrorMessages[index].length}
            />
          ))}
        </InputField>
      </S.InputFieldWithInfo>

      {/*유효 기간*/}
      <S.InputFieldWithInfo>
        <InputFieldHeader
          title={INPUT_INFO_TITLE.EXPIRATION_DATE}
          subTitle={INPUT_INFO_SUBTITLE.EXPIRATION_DATE}
        />
        <InputField
          label={INPUT_LABEL.EXPIRATION_DATE}
          errorMessages={cardNumbersErrorMessages}
        >
          {expirationPeriod.map((_, index) => (
            <Input
              type="number"
              key={index}
              placeholder={EXPIRATION_DATE_PLACEHOLDER[index]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onChangeExpirationPeriod(e, index);
              }}
              onBlur={(e: FocusEvent<Element, Element>) => {
                onBlurExpirationPeriod(e, index);
              }}
              isError={!!expirationPeriodErrorMessages[index].length}
            />
          ))}
        </InputField>
      </S.InputFieldWithInfo>

      {/*소유자 이름*/}
      <S.InputFieldWithInfo>
        <InputFieldHeader title={INPUT_INFO_TITLE.OWNER_NAME} />
        <InputField
          label={INPUT_LABEL.OWNER_NAME}
          errorMessages={cardNumbersErrorMessages}
        >
          <Input
            placeholder={PLACEHOLDER.OWNER_NAME}
            isError={!!ownerNameErrorMessages[0].length}
            type="text"
            maxLength={MAX_LENGTH.OWNER_NAME}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              e.target.value = e.target.value.toUpperCase();
              onChangeOwnerName(e, 0);
            }}
          />
        </InputField>
      </S.InputFieldWithInfo>
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
