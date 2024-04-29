import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import Input from "@/components/_common/Input/Input";
import React, { ChangeEvent, useState } from "react";
import useInputs from "@/hooks/useInputs";
import { INPUT_COUNTS } from "@/constants/condition";
import useInputRefs from "@/hooks/useInputRefs";
import { ErrorStatus } from "@/utils/validation";
import { hasInactiveInputError } from "@/utils/view";

export type ExpirationPeriodInputType = {
  expirationMonth: string;
  expirationYear: string;
};

interface Props {
  expirationPeriodState: ReturnType<
    typeof useInputs<ExpirationPeriodInputType>
  >;
}

type ExpirationPeriodErrorType =
  | ErrorStatus.IS_NOT_NUMBER
  | ErrorStatus.INVALID_MONTH
  | ErrorStatus.INVALID_LENGTH;

const ExpirationPeriodErrorMessages: Record<ExpirationPeriodErrorType, string> =
  {
    [ErrorStatus.IS_NOT_NUMBER]: "숫자로 입력하세요.",
    [ErrorStatus.INVALID_MONTH]: "달은 2자리의 정수로 입력해 주세요.",
    [ErrorStatus.INVALID_LENGTH]: "2자리의 정수로 입력해 주세요.",
  };

type InputConfigType = {
  name: keyof ExpirationPeriodInputType;
  placeholder: string;
};

const expirationInputConfigs: InputConfigType[] = [
  {
    name: "expirationMonth",
    placeholder: MESSAGE.PLACEHOLDER.EXPIRATION_MONTH,
  },
  {
    name: "expirationYear",
    placeholder: MESSAGE.PLACEHOLDER.EXPIRATION_YEAR,
  },
];

const ExpirationPeriodField = ({ expirationPeriodState }: Props) => {
  const { onChange, errors, values } = expirationPeriodState;
  const { inputRefs, onFocusNextInput } = useInputRefs(
    INPUT_COUNTS.CARD_NUMBERS,
    onChange
  );
  const [isErrorShow, setIsErrorShow] = useState(hasInactiveInputError(errors));

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
        isErrorShow={isErrorShow}
      >
        {expirationInputConfigs.map(
          (inputConfig: InputConfigType, index: number) => {
            const { name, placeholder } = inputConfig;

            return (
              <Input
                autoFocus={index === 0}
                ref={(el) => (inputRefs.current[index] = el)}
                type="number"
                key={index}
                name={name}
                placeholder={placeholder}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  onFocusNextInput(e, index);
                }}
                isError={!!errors[name]}
                onBlur={() => setIsErrorShow(true)}
                value={values[name]}
              />
            );
          }
        )}
      </InputField>
    </S.InputFieldWithInfo>
  );
};

const arePropsEqual = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.expirationPeriodState.errors ===
      nextProps.expirationPeriodState.errors &&
    prevProps.expirationPeriodState.values ===
      nextProps.expirationPeriodState.values
  );
};

const ExpirationPeriodFieldMemo = React.memo(
  ExpirationPeriodField,
  arePropsEqual
);

export default ExpirationPeriodFieldMemo;
