import InputFieldHeader from "@/components/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/InputField/InputField";
import Input from "@/components/Input/Input";
import { ChangeEvent } from "react";
import { MAX_LENGTH } from "@/constants/condition";
import useInput from "@/hooks/useInput";
import useShowError from "@/hooks/useShowError";

interface Props {
  ownerNameState: ReturnType<typeof useInput>;
}

const OwnerNameField = ({ ownerNameState }: Props) => {
  const { onChange, error } = ownerNameState;
  const { showErrors, onBlurShowErrors, onFocusHideErrors } = useShowError();

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.OWNER_NAME} />
      <InputField
        label={MESSAGE.INPUT_LABEL.OWNER_NAME}
        errorMessages={[error]}
        showErrors={showErrors}
      >
        <Input
          placeholder={MESSAGE.PLACEHOLDER.OWNER_NAME}
          isError={!!error}
          type="text"
          maxLength={MAX_LENGTH.OWNER_NAME}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.target.value = e.target.value.toUpperCase();
            onChange(e);
          }}
          onFocus={onFocusHideErrors}
          onBlur={onBlurShowErrors}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default OwnerNameField;
