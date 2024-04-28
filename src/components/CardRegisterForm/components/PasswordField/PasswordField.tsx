import S from "../../style";
import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import Input from "@/components/_common/Input/Input";
import useInput from "@/hooks/useInput";
import React, { ChangeEvent, useState } from "react";
import { VALID_LENGTH } from "@/constants/condition";
import { ErrorStatus } from "@/utils/validation";

interface Props {
  passwordState: ReturnType<typeof useInput<string>>;
}

type PasswordErrorType = ErrorStatus.IS_NOT_NUMBER | ErrorStatus.INVALID_LENGTH;

const PasswordError: Record<PasswordErrorType, string> = {
  [ErrorStatus.IS_NOT_NUMBER]: "숫자로 입력해주세요.",
  [ErrorStatus.INVALID_LENGTH]: "비밀번호는 숫자 2자리를 입력해야 합니다.",
};

const PasswordField = ({ passwordState }: Props) => {
  const { onChange, error } = passwordState;
  const [isErrorShow, setIsErrorShow] = useState(false);

  const currentErrorMessage = (Object.values(error) as PasswordErrorType[]).map(
    (message) => PasswordError[message]
  );

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.PASSWORD} />
      <InputField
        label={MESSAGE.INPUT_LABEL.PASSWORD}
        errorMessages={currentErrorMessage}
        isErrorShow={isErrorShow}
      >
        <Input
          autoFocus={true}
          type="password"
          maxLength={VALID_LENGTH.PASSWORD}
          placeholder={MESSAGE.PLACEHOLDER.PASSWORD}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e);
          }}
          isError={!!error.length}
          onBlur={() => {
            setIsErrorShow(true);
          }}
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
