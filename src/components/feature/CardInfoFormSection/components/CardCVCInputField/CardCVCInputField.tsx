import InputField from "@/components/common/InputField";
import { checkIsInt, validateCVCRange } from "@/utils/validator";
import { useFormValue } from "@hooks/useFormWrapper";

import type { CardInfoFormState } from "../../formState";

interface CardCVCInputFieldProps {
  onComplete?: () => void;
}

const CVC_MAX_LENGTH = 3;

const CardCVCInputField = ({ onComplete }: CardCVCInputFieldProps) => {
  const { getValue, setValue } = useFormValue<CardInfoFormState>();
  const CVC = getValue("CVC");
  const status = getValue("CVCStatus");

  const handleCVCChange = (input: string) => {
    const isInvalid =
      input.length !== 0 && (!checkIsInt(+input) || !validateCVCRange(+input));
    const isComplete = input.length === CVC_MAX_LENGTH;
    const nextStatus = isInvalid ? "ERROR" : isComplete ? "SUCCESS" : "DEFAULT";

    setValue("CVCStatus", nextStatus);
    setValue("CVC", input.slice(0, CVC_MAX_LENGTH));

    if (isComplete && nextStatus === "SUCCESS") {
      onComplete?.();
    }
  };

  return (
    <InputField
      title="CVC 번호를 입력해 주세요"
      label="CVC"
      helperMessage={status === "ERROR" ? "숫자만 입력 가능합니다." : ""}
      inputPropsList={[
        {
          key: "cvc",
          placeholder: "123",
          maxLength: CVC_MAX_LENGTH,
          fullWidth: true,
          value: CVC,
          onChange: (e) => {
            const input = e.target.value;
            handleCVCChange(input);
          },
          state: status === "ERROR" ? "error" : "default",
          autoFocus: true,
        },
      ]}
    />
  );
};

export default CardCVCInputField;
