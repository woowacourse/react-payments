import { ChangeEvent } from "react";
import InputField from "@/components/InputField/InputField";
import Input from "@/components/Input/Input";
import S from "./style";
import InputFieldHeader from "../InputFieldHeader/InputFieldHeader";
import {
  validateExpirationDate,
  validateIsValidLength,
  validateMonth,
  validateOwnerName,
} from "@/utils/validation";
import useInputs from "@/hooks/useInputs";
import { MAX_LENGTH, VALID_LENGTH } from "@/constants/condition";
import { MESSAGE } from "@/constants/message";
import { updatedErrorMessage } from "@/utils/arrayHelper";

interface Props {
  cardNumbersState: ReturnType<typeof useInputs>;
  expiredPeriodState: ReturnType<typeof useInputs>;
  ownerNameState: ReturnType<typeof useInputs>;
}

const CardRegisterForm = ({
  cardNumbersState,
  expiredPeriodState,
  ownerNameState,
}: Props) => {
  const {
    inputs: cardNumbers,
    onChange: onChangeCardNumbers,
    errorMessage: cardNumbersErrorMessages,
    setErrorMessage: setCardNumbersErrorMessages,
  } = cardNumbersState;

  const {
    inputs: expirationPeriod,
    onChange: onChangeExpirationPeriod,
    errorMessage: expirationPeriodErrorMessages,
    setErrorMessage: setExpirationPeriodErrorMessages,
  } = expiredPeriodState;

  const {
    inputs: ownerName,
    onChange: onChangeOwnerName,
    errorMessage: ownerNameErrorMessage,
    setErrorMessage: setOwnerNameErrorMessage,
  } = ownerNameState;

  const onValidateCardNumbers = (index: number) => {
    if (cardNumbers[index].length) {
      const errorMessage = validateIsValidLength(
        cardNumbers[index],
        VALID_LENGTH.CARD_NUMBERS
      );

      return setCardNumbersErrorMessages((prev) =>
        updatedErrorMessage(errorMessage, prev, index)
      );
    }
    setCardNumbersErrorMessages((prev) =>
      updatedErrorMessage(null, prev, index)
    );
  };

  const onValidateExpirationPeriod = (index: number) => {
    if (expirationPeriod[index].length) {
      const expiredError = validateExpirationDate(expirationPeriod);
      setExpirationPeriodErrorMessages(expiredError);

      const monthError =
        index === 0 && validateMonth(Number(expirationPeriod[index]));

      const lengthError = validateIsValidLength(
        expirationPeriod[index],
        VALID_LENGTH.EXPIRATION_PERIOD
      );

      setExpirationPeriodErrorMessages((prev) =>
        updatedErrorMessage(monthError || lengthError, prev, index)
      );
    }
    setExpirationPeriodErrorMessages((prev) =>
      updatedErrorMessage(null, prev, index)
    );
  };

  const onValidateOwnerName = () => {
    const errorMessage = validateOwnerName(ownerName[0]);
    setOwnerNameErrorMessage(() => [errorMessage]);
  };

  return (
    <S.CardFormWrapper>
      {/*카드 번호*/}
      <S.InputFieldWithInfo>
        <InputFieldHeader
          title={MESSAGE.INPUT_INFO_TITLE.CARD_NUMBERS}
          subTitle={MESSAGE.INPUT_INFO_SUBTITLE.CARD_NUMBERS}
        />
        <InputField
          label={MESSAGE.INPUT_LABEL.CARD_NUMBERS}
          errorMessages={cardNumbersErrorMessages}
        >
          {cardNumbers.map((_: string, index: number) => (
            <Input
              type="number"
              key={index}
              placeholder={MESSAGE.PLACEHOLDER.CARD_NUMBERS}
              onChange={(e) => {
                onChangeCardNumbers(e, index);
              }}
              onBlur={() => onValidateCardNumbers(index)}
              isError={
                !!(cardNumbers[index] && cardNumbersErrorMessages[index])
              }
            />
          ))}
        </InputField>
      </S.InputFieldWithInfo>

      {/*유효 기간*/}
      <S.InputFieldWithInfo>
        <InputFieldHeader
          title={MESSAGE.INPUT_INFO_TITLE.EXPIRATION_DATE}
          subTitle={MESSAGE.INPUT_INFO_SUBTITLE.EXPIRATION_DATE}
        />
        <InputField
          label={MESSAGE.INPUT_LABEL.EXPIRATION_DATE}
          errorMessages={expirationPeriodErrorMessages}
        >
          {expirationPeriod.map((_: string, index: number) => (
            <Input
              type="number"
              key={index}
              placeholder={MESSAGE.EXPIRATION_DATE_PLACEHOLDER[index]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onChangeExpirationPeriod(e, index);
              }}
              onBlur={() => {
                onValidateExpirationPeriod(index);
              }}
              isError={
                !!(
                  expirationPeriod[index] &&
                  expirationPeriodErrorMessages[index]
                )
              }
            />
          ))}
        </InputField>
      </S.InputFieldWithInfo>

      {/*소유자 이름*/}
      <S.InputFieldWithInfo>
        <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.OWNER_NAME} />
        <InputField
          label={MESSAGE.INPUT_LABEL.OWNER_NAME}
          errorMessages={ownerNameErrorMessage}
        >
          <Input
            placeholder={MESSAGE.PLACEHOLDER.OWNER_NAME}
            isError={!!ownerNameErrorMessage[0]}
            type="text"
            maxLength={MAX_LENGTH.OWNER_NAME}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              e.target.value = e.target.value.toUpperCase();
              onChangeOwnerName(e, 0);
            }}
            onBlur={() => {
              onValidateOwnerName();
            }}
          />
        </InputField>
      </S.InputFieldWithInfo>
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
