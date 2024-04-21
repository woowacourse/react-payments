import { ChangeEvent, useState } from "react";
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
import {
  validateExpirationDate,
  validateIsValidLength,
  validateMonth,
  validateOwnerName,
} from "@/utils/validation";
import useInputs from "@/hooks/useInputs";
import { MAX_LENGTH } from "@/constants/condition";

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
    Array(cardNumbers.length).fill("")
  );
  const [expirationPeriodErrorMessages, setExpirationPeriodErrorMessages] =
    useState(Array(expirationPeriod.length).fill(""));
  const [ownerNameErrorMessage, setOwnerNameErrorMessage] = useState("");

  const handleCardNumberBlur = (index: number) => {
    const errorMessage = validateIsValidLength(cardNumbers[index], 4);
    setCardNumbersErrorMessages((messages) => [
      ...messages.slice(0, index),
      errorMessage,
      ...messages.slice(index + 1),
    ]);
  };

  const handleExpirationPeriodBlur = (index: number) => {
    const monthError =
      index === 0 ? validateMonth(Number(expirationPeriod[index])) : "";
    const lengthError = validateIsValidLength(expirationPeriod[index], 2);
    const expiredError = validateExpirationDate(expirationPeriod);
    const errorMessage = monthError || lengthError || expiredError;
    setExpirationPeriodErrorMessages((messages) => [
      ...messages.slice(0, index),
      errorMessage,
      ...messages.slice(index + 1),
    ]);
  };

  const handleOwnerNameBlur = () => {
    const errorMessage = validateOwnerName(ownerName[0]);
    setOwnerNameErrorMessage(errorMessage);
  };
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
          {cardNumbers.map((_: string, index: number) => (
            <Input
              maxLength={20}
              type="number"
              key={index}
              placeholder={PLACEHOLDER.CARD_NUMBERS}
              onChange={(e) => {
                onChangeCardNumbers(e, index);
              }}
              onBlur={() => handleCardNumberBlur(index)}
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
          title={INPUT_INFO_TITLE.EXPIRATION_DATE}
          subTitle={INPUT_INFO_SUBTITLE.EXPIRATION_DATE}
        />
        <InputField
          label={INPUT_LABEL.EXPIRATION_DATE}
          errorMessages={expirationPeriodErrorMessages}
        >
          {expirationPeriod.map((_: string, index: number) => (
            <Input
              type="number"
              key={index}
              placeholder={EXPIRATION_DATE_PLACEHOLDER[index]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onChangeExpirationPeriod(e, index);
              }}
              onBlur={() => {
                handleExpirationPeriodBlur(index);
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
        <InputFieldHeader title={INPUT_INFO_TITLE.OWNER_NAME} />
        <InputField
          label={INPUT_LABEL.OWNER_NAME}
          errorMessages={[ownerNameErrorMessage]}
        >
          <Input
            placeholder={PLACEHOLDER.OWNER_NAME}
            isError={!!ownerNameErrorMessage.length}
            type="text"
            maxLength={MAX_LENGTH.OWNER_NAME}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              e.target.value = e.target.value.toUpperCase();
              onChangeOwnerName(e, 0);
            }}
            onBlur={() => {
              handleOwnerNameBlur();
            }}
          />
        </InputField>
      </S.InputFieldWithInfo>
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
