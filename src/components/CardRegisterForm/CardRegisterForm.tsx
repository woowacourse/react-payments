import { ChangeEvent, useState } from "react";
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
import { makeStringArray, updatedErrorMessage } from "@/utils/arrayHelper";

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
  const { inputs: cardNumbers, onChange: onChangeCardNumbers } =
    cardNumbersState;

  const { inputs: expirationPeriod, onChange: onChangeExpirationPeriod } =
    expiredPeriodState;

  const { inputs: ownerName, onChange: onChangeOwnerName } = ownerNameState;

  const [cardNumbersErrorMessages, setCardNumbersErrorMessages] = useState(
    makeStringArray(cardNumbers.length)
  );

  const [expirationPeriodErrorMessages, setExpirationPeriodErrorMessages] =
    useState(makeStringArray(expirationPeriod.length));

  const [ownerNameErrorMessage, setOwnerNameErrorMessage] = useState("");

  const onBlurValidateCardNumber = (index: number) => {
    const errorMessage = validateIsValidLength(
      cardNumbers[index],
      VALID_LENGTH.CARD_NUMBERS
    );
    setCardNumbersErrorMessages((prev) =>
      updatedErrorMessage(errorMessage, prev, index)
    );
  };

  const onBlurValidateExpirationPeriod = (index: number) => {
    const expiredError = validateExpirationError();
    setExpirationPeriodErrorMessages(expiredError);

    const monthError =
      index === 0 ? validateMonth(Number(expirationPeriod[index])) : "";

    const lengthError = validateIsValidLength(
      expirationPeriod[index],
      VALID_LENGTH.EXPIRATION_PERIOD
    );

    const errorMessage = monthError || lengthError;

    setExpirationPeriodErrorMessages((prev) => {
      return updatedErrorMessage(errorMessage, prev, index);
    });
  };

  const validateExpirationError = () => {
    if (expirationPeriod[0] && expirationPeriod[1]) {
      const expiredError = validateExpirationDate(expirationPeriod);

      if (expiredError.length) {
        return [expiredError, expiredError];
      }
    }
    return ["", ""];
  };

  const onBlurValidateOwnerName = () => {
    const errorMessage = validateOwnerName(ownerName[0]);
    setOwnerNameErrorMessage(errorMessage);
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
              onBlur={() => onBlurValidateCardNumber(index)}
              isError={
                !!(cardNumbers[index] && cardNumbersErrorMessages[index].length)
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
                onBlurValidateExpirationPeriod(index);
              }}
              isError={
                !!(
                  expirationPeriod[index] &&
                  expirationPeriodErrorMessages[index].length
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
          errorMessages={[ownerNameErrorMessage]}
        >
          <Input
            placeholder={MESSAGE.PLACEHOLDER.OWNER_NAME}
            isError={!!ownerNameErrorMessage.length}
            type="text"
            maxLength={MAX_LENGTH.OWNER_NAME}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              e.target.value = e.target.value.toUpperCase();
              onChangeOwnerName(e, 0);
            }}
            onBlur={() => {
              onBlurValidateOwnerName();
            }}
          />
        </InputField>
      </S.InputFieldWithInfo>
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
