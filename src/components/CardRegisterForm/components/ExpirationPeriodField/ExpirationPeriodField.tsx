import InputFieldHeader from "@/components/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/InputField/InputField";
import Input from "@/components/Input/Input";
import { ChangeEvent, useState } from "react";
import useInputs from "@/hooks/useInputs";
import {
  makeNewErrorMessages,
  validateExpirationDate,
  validateIsValidLength,
  validateMonth,
} from "@/utils/validation";
import { INPUT_COUNTS, MAX_LENGTH, VALID_LENGTH } from "@/constants/condition";
import { limitNumberLength } from "@/utils/numberHelper";

interface Props {
  expiredPeriodState: ReturnType<typeof useInputs>;
}

const ExpirationPeriodField = ({ expiredPeriodState }: Props) => {
  const { inputs: expirationPeriod, onChange: onChangeExpirationPeriod } =
    expiredPeriodState;

  const [expirationPeriodErrorMessages, setExpirationPeriodErrorMessages] =
    useState(new Array(INPUT_COUNTS.EXPIRATION_PERIOD).fill(null));

  const onValidateExpirationPeriod = (index: number) => {
    const { expiredError, monthError, lengthError } = getExpirationError(index);
    if (expiredError) {
      setExpirationPeriodErrorMessages([expiredError, expiredError]);
    } else {
      setExpirationPeriodErrorMessages([null, null]);
    }
    if (monthError || lengthError) {
      setExpirationPeriodErrorMessages((prev) =>
        makeNewErrorMessages(prev, monthError || lengthError, index)
      );
    }
    if (!expirationPeriod[index].length) {
      setExpirationPeriodErrorMessages((prev) =>
        makeNewErrorMessages(prev, null, index)
      );
    }
  };

  const getExpirationError = (index: number) => {
    const expiredError = validateExpirationDate(expirationPeriod);

    const monthError =
      index === 0 && validateMonth(Number(expirationPeriod[index]));

    const lengthError = validateIsValidLength(
      expirationPeriod[index],
      VALID_LENGTH.EXPIRATION_PERIOD
    );

    return { expiredError, monthError, lengthError };
  };

  return (
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
              e.target.value = limitNumberLength({
                value: e.target.value,
                maxLength: MAX_LENGTH.EXPIRATION_PERIOD,
              });
              onChangeExpirationPeriod(e, index);
            }}
            onBlur={() => {
              onValidateExpirationPeriod(index);
            }}
            isError={
              !!(
                expirationPeriod[index] && expirationPeriodErrorMessages[index]
              )
            }
          />
        ))}
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default ExpirationPeriodField;
