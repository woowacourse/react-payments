import InputFieldHeader from "@/components/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/InputField/InputField";
import Input from "@/components/Input/Input";
import { ChangeEvent, useState } from "react";
import useInputs from "@/hooks/useInputs";
import {
  validateExpirationDate,
  validateIsValidLength,
  validateMonth,
} from "@/utils/validation";
import { INPUT_COUNTS, MAX_LENGTH, VALID_LENGTH } from "@/constants/condition";
import { limitNumberLength } from "@/utils/numberHelper";
import { ExpirationPeriodInputType } from "@/pages/CardRegisterPage/CardRegisterPage";
import { ERROR_MESSAGE, INVALID_LENGTH } from "@/constants/errorMessage";

interface Props {
  expiredPeriodState: ReturnType<typeof useInputs<ExpirationPeriodInputType>>;
}

const EXPIRATION_INPUTS_NAMES: (keyof ExpirationPeriodInputType)[] = [
  "expirationMonth",
  "expirationYear",
];

const ExpirationPeriodField = ({ expiredPeriodState }: Props) => {
  const { values: expirationPeriod, onChange: onChangeExpirationPeriod } =
    expiredPeriodState;

  const [expirationErrors, setExpirationErrors] = useState<(string | null)[]>([
    null,
    null,
  ]);

  const onValidateExpirationPeriod = (index: number) => {
    setExpirationErrors((prevErrors) => {
      let newErrors = [...prevErrors];
      newErrors = validateExpiration(newErrors);
      newErrors = validateValidMonth(newErrors, index);
      newErrors = validateLength(newErrors, index);
      return newErrors;
    });
  };

  const validateExpiration = (newErrors: (string | null)[]) => {
    const expirationError = validateExpirationDate(expirationPeriod);
    if (expirationError) {
      newErrors = [expirationError, expirationError];
    } else {
      newErrors = newErrors.map((error) =>
        error === ERROR_MESSAGE.EXPIRED_CARD_DATE ? null : error
      );
    }
    return newErrors;
  };

  const validateLength = (newErrors: (string | null)[], index: number) => {
    const lengthError = validateIsValidLength(
      expirationPeriod[EXPIRATION_INPUTS_NAMES[index]],
      VALID_LENGTH.EXPIRATION_PERIOD
    );
    if (
      lengthError &&
      expirationPeriod[EXPIRATION_INPUTS_NAMES[index]].length
    ) {
      newErrors[index] = lengthError;
    } else {
      newErrors[index] =
        newErrors[index] === INVALID_LENGTH(2) ? null : newErrors[index];
    }
    return newErrors;
  };

  const validateValidMonth = (newErrors: (string | null)[], index: number) => {
    if (index === 0) {
      const monthError = validateMonth(
        Number(expirationPeriod.expirationMonth)
      );
      if (monthError) {
        newErrors[0] = monthError;
      } else {
        newErrors[0] =
          newErrors[0] === ERROR_MESSAGE.INVALID_MONTH ? null : newErrors[0];
      }
    }
    return newErrors;
  };

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.EXPIRATION_DATE}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.EXPIRATION_DATE}
      />
      <InputField
        label={MESSAGE.INPUT_LABEL.EXPIRATION_DATE}
        errorMessages={expirationErrors}
      >
        {new Array(INPUT_COUNTS.EXPIRATION_PERIOD)
          .fill(0)
          .map((_: string, index: number) => (
            <Input
              type="number"
              key={index}
              name={EXPIRATION_INPUTS_NAMES[index]}
              placeholder={MESSAGE.EXPIRATION_DATE_PLACEHOLDER[index]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                e.target.value = limitNumberLength({
                  value: e.target.value,
                  maxLength: MAX_LENGTH.EXPIRATION_PERIOD,
                });
                onChangeExpirationPeriod(e);
              }}
              onBlur={() => {
                onValidateExpirationPeriod(index);
              }}
              isError={
                !!(
                  expirationPeriod[EXPIRATION_INPUTS_NAMES[index]] &&
                  expirationErrors[index]
                )
              }
            />
          ))}
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default ExpirationPeriodField;
