import InputFieldHeader from "@/components/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/InputField/InputField";
import Input from "@/components/Input/Input";
import { ChangeEvent } from "react";
import useInputs from "@/hooks/useInputs";
import { INPUT_COUNTS } from "@/constants/condition";
import useShowError from "@/hooks/useShowError";

export type ExpirationPeriodInputType = {
  expirationMonth: string;
  expirationYear: string;
};

interface Props {
  expiredPeriodState: ReturnType<typeof useInputs<ExpirationPeriodInputType>>;
}

const EXPIRATION_INPUTS_NAMES: (keyof ExpirationPeriodInputType)[] = [
  "expirationMonth",
  "expirationYear",
];

const ExpirationPeriodField = ({ expiredPeriodState }: Props) => {
  const { onChange, errors } = expiredPeriodState;
  const { showErrors, onBlurShowErrors, onFocusHideErrors } = useShowError();

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.EXPIRATION_DATE}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.EXPIRATION_DATE}
      />
      <InputField
        showErrors={showErrors}
        label={MESSAGE.INPUT_LABEL.EXPIRATION_DATE}
        errorMessages={Object.values(errors)}
      >
        {new Array(INPUT_COUNTS.EXPIRATION_PERIOD)
          .fill(0)
          .map((_: string, index: number) => (
            <Input
              type="number"
              key={index}
              maxLength={2}
              name={EXPIRATION_INPUTS_NAMES[index]}
              placeholder={MESSAGE.EXPIRATION_DATE_PLACEHOLDER[index]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                onChange(e);
              }}
              onBlur={onBlurShowErrors}
              onFocus={onFocusHideErrors}
              isError={!!errors[EXPIRATION_INPUTS_NAMES[index]]}
            />
          ))}
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default ExpirationPeriodField;
