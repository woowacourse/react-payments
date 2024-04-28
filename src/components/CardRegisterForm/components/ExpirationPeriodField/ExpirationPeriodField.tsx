import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import Input from "@/components/_common/Input/Input";
import React, { ChangeEvent } from "react";
import useInputs from "@/hooks/useInputs";
import { INPUT_COUNTS } from "@/constants/condition";
import useInputRefs from "@/hooks/useInputRefs";
import { ErrorStatus } from "@/utils/validation";
import { isErrorInInputs } from "@/utils/view";

export type ExpirationPeriodInputType = {
  expirationMonth: string;
  expirationYear: string;
};

interface Props {
  expirationPeriodState: ReturnType<
    typeof useInputs<ExpirationPeriodInputType>
  >;
}

const EXPIRATION_INPUTS_NAMES: (keyof ExpirationPeriodInputType)[] = [
  "expirationMonth",
  "expirationYear",
];

type ExpirationPeriodErrorType =
  | ErrorStatus.IS_NOT_NUMBER
  | ErrorStatus.INVALID_MONTH;

const ExpirationPeriodErrorMessages: Record<ExpirationPeriodErrorType, string> =
  {
    [ErrorStatus.IS_NOT_NUMBER]: "숫자로 입력하세요.",
    [ErrorStatus.INVALID_MONTH]: "달은 2자리의 정수로 입력해 주세요.",
  };

const ExpirationPeriodField = ({ expirationPeriodState }: Props) => {
  const { onChange, errors } = expirationPeriodState;

  const { inputRefs, onFocusNextInput } = useInputRefs(
    INPUT_COUNTS.CARD_NUMBERS,
    onChange
  );

  const currentErrorMessages = (
    Object.values(errors) as ExpirationPeriodErrorType[]
  ).map((message) => ExpirationPeriodErrorMessages[message]);

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.EXPIRATION_DATE}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.EXPIRATION_DATE}
      />
      <InputField
        label={MESSAGE.INPUT_LABEL.EXPIRATION_DATE}
        errorMessages={currentErrorMessages}
        isErrorShow={isErrorInInputs(errors)}
      >
        {new Array(INPUT_COUNTS.EXPIRATION_PERIOD)
          .fill(0)
          .map((_: string, index: number) => (
            <Input
              autoFocus={index === 0}
              ref={(el) => (inputRefs.current[index] = el)}
              type="number"
              key={index}
              name={EXPIRATION_INPUTS_NAMES[index]}
              placeholder={MESSAGE.EXPIRATION_DATE_PLACEHOLDER[index]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onFocusNextInput(e, index);
              }}
              isError={!!errors[EXPIRATION_INPUTS_NAMES[index]]}
            />
          ))}
      </InputField>
    </S.InputFieldWithInfo>
  );
};

const arePropsEqual = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.expirationPeriodState.errors ===
    nextProps.expirationPeriodState.errors
  );
};

const ExpirationPeriodFieldMemo = React.memo(
  ExpirationPeriodField,
  arePropsEqual
);

export default ExpirationPeriodFieldMemo;
