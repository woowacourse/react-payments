import S from "../../style";
import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import Input from "@/components/_common/Input/Input";
import useInput from "@/hooks/useInput";
import React, { ChangeEvent } from "react";
import { VALID_LENGTH } from "@/constants/condition";

interface Props {
  passwordState: ReturnType<typeof useInput<string>>;
}

const PasswordField = ({ passwordState }: Props) => {
  const { onChange, error, value } = passwordState;

  const isError = !!error.length && !value.length;
  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.PASSWORD} />
      <InputField label={MESSAGE.INPUT_LABEL.PASSWORD} errorMessages={error}>
        <Input
          autoFocus={true}
          type="password"
          maxLength={VALID_LENGTH.PASSWORD}
          placeholder={MESSAGE.PLACEHOLDER.PASSWORD}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e);
          }}
          isError={isError}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

const arePropsEqual = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.passwordState.error === nextProps.passwordState.error &&
    prevProps.passwordState.value === nextProps.passwordState.value
  );
};

const PasswordFieldMemo = React.memo(PasswordField, arePropsEqual);
export default PasswordFieldMemo;
