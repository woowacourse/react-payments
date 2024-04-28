import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import Input from "@/components/_common/Input/Input";
import { ChangeEvent } from "react";
import { MAX_LENGTH } from "@/constants/condition";
import useInput from "@/hooks/useInput";
import { ErrorStatus } from "@/utils/validation";
import { sliceInvalidValueWithRegex } from "@/utils/view";
import { REGEX } from "@/constants/regex";

interface Props {
  ownerNameState: ReturnType<typeof useInput<string>>;
}

const OwnerNameField = ({ ownerNameState }: Props) => {
  const { onChange, error, setError, isError } = ownerNameState;

  const onEnterCompleted = () => {
    setError((prev) => {
      if (prev.includes(ErrorStatus.ENTER_REQUIRED)) {
        return [...prev].filter((e) => e !== ErrorStatus.ENTER_REQUIRED);
      }
      return prev;
    });
  };

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.OWNER_NAME} />
      <InputField
        label={MESSAGE.INPUT_LABEL.OWNER_NAME}
        errorMessages={[
          error.includes(ErrorStatus.NAME_SHOULD_BE_CAPITAL)
            ? ErrorStatus.NAME_SHOULD_BE_CAPITAL
            : null,
        ]}
      >
        <Input
          autoFocus={true}
          placeholder={MESSAGE.PLACEHOLDER.OWNER_NAME}
          isError={isError}
          type="text"
          maxLength={MAX_LENGTH.OWNER_NAME}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e);
            sliceInvalidValueWithRegex(e, REGEX.CAPITAL_LETTERS);
          }}
          onKeyDown={onEnterCompleted}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default OwnerNameField;
