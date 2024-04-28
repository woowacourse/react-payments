import Input from "@/components/_common/Input/Input";
import InputField from "@/components/_common/InputField/InputField";
import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import { MESSAGE } from "@/constants/message";
import S from "../../style";
import useInput from "@/hooks/useInput";
import { ChangeEvent } from "react";
import { VALID_LENGTH } from "@/constants/condition";
import { sliceOverMaxLength } from "@/utils/view";

interface Props {
  CVCNumbersState: ReturnType<typeof useInput<string>>;
  setIsFront: React.Dispatch<React.SetStateAction<boolean>>;
}

const CVCField = ({ CVCNumbersState, setIsFront }: Props) => {
  const { onChange, error, isError } = CVCNumbersState;

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
            sliceOverMaxLength(e, VALID_LENGTH.CVC_NUMBERS);
            onChange(e);
          }}
          onBlur={() => {
            setIsFront(true);
          }}
          isError={isError}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default CVCField;
