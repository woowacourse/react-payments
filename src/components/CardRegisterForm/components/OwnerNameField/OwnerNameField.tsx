import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import Input from "@/components/_common/Input/Input";
import { ChangeEvent } from "react";
import { MAX_LENGTH } from "@/constants/condition";
import useInput from "@/hooks/useInput";
import useShowError from "@/hooks/useShowError";
import { ValidationStatus } from "@/utils/validation";

interface Props {
  ownerNameState: ReturnType<typeof useInput<string>>;
}

const OwnerNameField = ({ ownerNameState }: Props) => {
  const { onChange, error, setError, isError } = ownerNameState;
  const { showErrors, onBlurShowErrors, onFocusHideErrors } = useShowError();

  const onEnterCompleted = () => {
    setError((prev) => {
      if (prev.includes(ValidationStatus.ENTER_REQUIRED)) {
        return [...prev].filter((e) => e !== ValidationStatus.ENTER_REQUIRED);
      }
      return prev;
    });
  };

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.OWNER_NAME} />
      <InputField
        label={MESSAGE.INPUT_LABEL.OWNER_NAME}
        errorMessages={error}
        showErrors={showErrors}
      >
        <Input
          autoFocus={true}
          placeholder={MESSAGE.PLACEHOLDER.OWNER_NAME}
          isError={isError}
          type="text"
          maxLength={MAX_LENGTH.OWNER_NAME}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.target.value = e.target.value.toUpperCase();
            onChange(e);
          }}
          onFocus={onFocusHideErrors}
          onBlur={() => {
            onEnterCompleted();
            onBlurShowErrors();
          }}
          onKeyDown={onEnterCompleted}
          style={{ textTransform: "uppercase" }}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default OwnerNameField;
