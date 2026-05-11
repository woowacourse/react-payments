import { useState } from "react";
import InputField from "@/components/common/InputField";
import { checkIsInt, validateCVCRange } from "@/utils/validator";

type InputStatus = "default" | "error";

interface CardCVCInputFieldProps {
  CVC: string;
  onChange: (CVC: string) => void;
  onComplete?: () => void;
}

const CVC_MAX_LENGTH = 3;

const CardCVCInputField = ({
  CVC,
  onChange,
  onComplete,
}: CardCVCInputFieldProps) => {
  const [status, setStatus] = useState<InputStatus>("default");

  const handleCVCChange = (input: string) => {
    if (input.length !== 0)
      if (!checkIsInt(+input) || !validateCVCRange(+input)) {
        return setStatus("error");
      }

    setStatus("default");

    onChange(input.slice(0, CVC_MAX_LENGTH));

    if (input.length === CVC_MAX_LENGTH && status !== "error") {
      onComplete?.();
    }
  };

  return (
    <InputField
      title="CVC 번호를 입력해 주세요"
      label="CVC"
      helperMessage={status === "error" ? "숫자만 입력 가능합니다." : ""}
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
          state: status,
          autoFocus: true,
        },
      ]}
    />
  );
};

export default CardCVCInputField;
