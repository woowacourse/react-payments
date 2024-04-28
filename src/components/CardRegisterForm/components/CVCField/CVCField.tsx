import Input from "@/components/_common/Input/Input";
import InputField from "@/components/_common/InputField/InputField";
import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import { MESSAGE } from "@/constants/message";
import S from "../../style";
import useInput from "@/hooks/useInput";
import React, { ChangeEvent, useState } from "react";
import { VALID_LENGTH } from "@/constants/condition";
import { ErrorStatus } from "@/utils/validation";

interface Props {
  CVCNumbersState: ReturnType<typeof useInput<string>>;
  setIsFront: React.Dispatch<React.SetStateAction<boolean>>;
}

type CVCNumbersErrorType =
  | ErrorStatus.IS_NOT_NUMBER
  | ErrorStatus.INVALID_MONTH
  | ErrorStatus.INVALID_LENGTH;

const CVCNumbersErrorMessage: Record<CVCNumbersErrorType, string> = {
  [ErrorStatus.IS_NOT_NUMBER]: "숫자로 입력하세요.",
  [ErrorStatus.INVALID_MONTH]: "CVC는 숫자 3자리로 입력해 주세요.",
  [ErrorStatus.INVALID_LENGTH]: "CVC는 숫자 3자리로 입력해 주세요.",
};

const CVCField = ({ CVCNumbersState, setIsFront }: Props) => {
  const { onChange, error } = CVCNumbersState;
  const [isErrorShow, setIsErrorShow] = useState(false);

  const currentErrorMessages = (
    Object.values(error) as CVCNumbersErrorType[]
  ).map((message) => CVCNumbersErrorMessage[message]);

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.CVC} />
      <InputField
        label={MESSAGE.INPUT_LABEL.CVC}
        errorMessages={currentErrorMessages}
        isErrorShow={isErrorShow}
      >
        <Input
          autoFocus={true}
          type="number"
          maxLength={VALID_LENGTH.CVC_NUMBERS}
          name={"cvc"}
          placeholder={MESSAGE.PLACEHOLDER.CVC}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setIsFront(false);
            onChange(e);
          }}
          onBlur={() => {
            setIsErrorShow(true);
            setIsFront(true);
          }}
          isError={!!error.length}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

const arePropsEqual = (prevProps: Props, nextProps: Props) => {
  return prevProps.CVCNumbersState.error === nextProps.CVCNumbersState.error;
};

const CVCFieldMemo = React.memo(CVCField, arePropsEqual);
export default CVCFieldMemo;
