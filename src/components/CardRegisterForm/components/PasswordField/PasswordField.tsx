import S from "../../style";
import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import Input from "@/components/_common/Input/Input";
import useInput from "@/hooks/useInput";
import useShowError from "@/hooks/useShowError";
import { ChangeEvent } from "react";
import { VALID_LENGTH } from "@/constants/condition";
import { sliceOverMaxLength } from "@/utils/view";
interface Props {
  passwordState: ReturnType<typeof useInput<string>>;
}

const PasswordField = ({ passwordState }: Props) => {
  const { onChange, error, isError } = passwordState;
  const { showErrors, onBlurShowErrors, onFocusHideErrors } = useShowError();

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.PASSWORD} />
      <InputField
        label={MESSAGE.INPUT_LABEL.PASSWORD}
        errorMessages={error}
        showErrors={showErrors}
      >
        <Input
          autoFocus={true}
          type="password"
          maxLength={VALID_LENGTH.PASSWORD}
          placeholder={MESSAGE.PLACEHOLDER.PASSWORD}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            sliceOverMaxLength(e, VALID_LENGTH.PASSWORD);
            onChange(e);
          }}
          onFocus={onFocusHideErrors}
          onBlur={onBlurShowErrors}
          isError={isError}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default PasswordField;
