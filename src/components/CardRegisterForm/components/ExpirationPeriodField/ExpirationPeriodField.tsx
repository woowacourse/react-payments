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
import { ExpirationPeriodInputType } from "@/pages/CardRegisterPage/CardRegisterPage";

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

  const [expirationErrors, setExpirationErrors] = useState(
    new Array(INPUT_COUNTS.EXPIRATION_PERIOD).fill(null)
  );

  const onValidateExpirationPeriod = (index: number) => {
    getExpirationError();
    getLengthError(index);
    index === 0 && getMonthError();
    resetVacantInputError(index);
  };

  const getMonthError = () => {
    const monthError = validateMonth(Number(expirationPeriod.expirationMonth));

    if (monthError) {
      setExpirationErrors((prev) => makeNewErrorMessages(prev, monthError, 0));
    }
  };

  const getLengthError = (index: number) => {
    const lengthError = validateIsValidLength(
      expirationPeriod[EXPIRATION_INPUTS_NAMES[index]],
      VALID_LENGTH.EXPIRATION_PERIOD
    );

    if (lengthError) {
      setExpirationErrors((prev) =>
        makeNewErrorMessages(prev, lengthError, index)
      );
    } else {
      setExpirationErrors((prev) => makeNewErrorMessages(prev, null, index));
    }
  };

  const getExpirationError = () => {
    const expiredError = validateExpirationDate(expirationPeriod);

    if (expiredError) {
      setExpirationErrors([expiredError, expiredError]);
    } else {
      setExpirationErrors([null, null]);
    }
  };

  const resetVacantInputError = (index: number) => {
    if (!expirationPeriod[EXPIRATION_INPUTS_NAMES[index]].length) {
      setExpirationErrors((prev) => makeNewErrorMessages(prev, null, index));
    }
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
