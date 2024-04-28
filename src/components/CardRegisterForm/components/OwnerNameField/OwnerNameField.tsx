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
  setIsNameEntered: React.Dispatch<React.SetStateAction<boolean>>;
}

const OwnerNameField = ({ ownerNameState, setIsNameEntered }: Props) => {
  const { onChange, error, isError } = ownerNameState;

  const onEnterCompleted = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsNameEntered(true);
    }
  };

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.OWNER_NAME} />
      <InputField
        label={MESSAGE.INPUT_LABEL.OWNER_NAME}
        errorMessages={isError ? [ErrorStatus.NAME_SHOULD_BE_CAPITAL] : []}
      >
        <Input
          autoFocus={true}
          placeholder={MESSAGE.PLACEHOLDER.OWNER_NAME}
          isError={!!error.length}
          type="text"
          maxLength={MAX_LENGTH.OWNER_NAME}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            sliceInvalidValueWithRegex(e, REGEX.CAPITAL_LETTERS);
            onChange(e);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            onEnterCompleted(e)
          }
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default OwnerNameField;
