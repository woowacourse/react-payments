import Input from "@/components/_common/Input/Input";
import InputField from "@/components/_common/InputField/InputField";
import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import { MESSAGE } from "@/constants/message";
import S from "../../style";
import useInput from "@/hooks/useInput";
import useShowError from "@/hooks/useShowError";
import { ChangeEvent } from "react";
import { VALID_LENGTH } from "@/constants/condition";

interface Props {
  CVCNumbersState: ReturnType<typeof useInput<string>>;
}

const CVCField = ({ CVCNumbersState }: Props) => {
  const { onChange, error, isError } = CVCNumbersState;
  const { showErrors, onBlurShowErrors, onFocusHideErrors } =
    useShowError(error);

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.CVC} />
      <InputField
        label={MESSAGE.INPUT_LABEL.CVC}
        errorMessages={error}
        showErrors={showErrors}
      >
        <Input
          autoFocus={true}
          type="number"
          maxLength={VALID_LENGTH.CVC_NUMBERS}
          name={"cvc"}
          placeholder={MESSAGE.PLACEHOLDER.CVC}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value.length > e.target.maxLength)
              e.target.value = e.target.value.slice(0, e.target.maxLength);
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

export default CVCField;
