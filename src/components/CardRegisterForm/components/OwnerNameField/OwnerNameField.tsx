import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import Input from "@/components/_common/Input/Input";
import React, { ChangeEvent, useState } from "react";
import { MAX_LENGTH } from "@/constants/condition";
import useInput from "@/hooks/useInput";
import { ErrorStatus } from "@/utils/validation";

interface Props {
  ownerNameState: ReturnType<typeof useInput<string>>;
  setIsNameEntered: React.Dispatch<React.SetStateAction<boolean>>;
}

type OwnerNameErrorType =
  | ErrorStatus.NAME_SHOULD_BE_CAPITAL
  | ErrorStatus.INVALID_LENGTH;

const OwnerNameErrorMessage: Record<OwnerNameErrorType, string> = {
  [ErrorStatus.NAME_SHOULD_BE_CAPITAL]: "이름은 영어 대문자로 입력해 주세요.",
  [ErrorStatus.INVALID_LENGTH]:
    "이름은 영어 대문자로 2글자 이상 입력해 주세요.",
};

const OwnerNameField = ({ ownerNameState, setIsNameEntered }: Props) => {
  const { onChange, error } = ownerNameState;
  const [isErrorShow, setIsErrorShow] = useState(false);

  const currentErrorMessages = (
    Object.values(error) as OwnerNameErrorType[]
  ).map((message) => OwnerNameErrorMessage[message]);

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
        errorMessages={currentErrorMessages}
        isErrorShow={isErrorShow}
      >
        <Input
          autoFocus={true}
          placeholder={MESSAGE.PLACEHOLDER.OWNER_NAME}
          isError={!!error.length}
          type="text"
          maxLength={MAX_LENGTH.OWNER_NAME}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            onEnterCompleted(e)
          }
          onFocus={() => setIsErrorShow(true)}
          onBlur={() => {
            setIsErrorShow(true);
            setIsNameEntered(true);
          }}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

const arePropsEqual = (prevProps: Props, nextProps: Props) => {
  return prevProps.ownerNameState.error === nextProps.ownerNameState.error;
};

const OwnerNameFieldMemo = React.memo(OwnerNameField, arePropsEqual);
export default OwnerNameFieldMemo;
