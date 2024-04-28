import Input from "@/components/_common/Input/Input";
import InputField from "@/components/_common/InputField/InputField";
import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import { MESSAGE } from "@/constants/message";
import S from "../../style";
import useInput from "@/hooks/useInput";
import React, { ChangeEvent } from "react";
import { VALID_LENGTH } from "@/constants/condition";

interface Props {
  CVCNumbersState: ReturnType<typeof useInput<string>>;
  setIsFront: React.Dispatch<React.SetStateAction<boolean>>;
}

const CVCField = ({ CVCNumbersState, setIsFront }: Props) => {
  const { onChange, error } = CVCNumbersState;

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.CVC} />
      <InputField label={MESSAGE.INPUT_LABEL.CVC} errorMessages={error}>
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
