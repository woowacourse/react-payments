import { useState } from "react";
import InputField from "@components/common/InputField.tsx";
import { checkIsInt, validateCVCRange } from "@/utils/validator";
import { CVC_MAX_LENGTH, HELPER_MESSAGE, type InputStatus } from "./constants";

interface CardCVCInputFieldProps {
  CVC: string;
  onChange: (CVC: string) => void;
}

const CardCVCInputField = ({ CVC, onChange }: CardCVCInputFieldProps) => {
  const [status, setStatus] = useState<InputStatus>("DEFAULT");

  const handleCVCChange = (input: string) => {
    if (input.length !== 0 && !checkIsInt(+input)) {
      setStatus("NOT_NUMBER");
      return;
    }

    setStatus("DEFAULT");
    onChange(input.slice(0, CVC_MAX_LENGTH));
  };

  const handleCVCBlur = (input: string) => {
    if (input.length === 0) {
      setStatus("EMPTY");
      return;
    }

    if (!validateCVCRange(+input)) {
      setStatus("INVALID_LENGTH");
      return;
    }

    setStatus("DEFAULT");
  };

  return (
    <InputField
      title="CVC 번호를 입력해 주세요"
      label="CVC"
      helperMessage={HELPER_MESSAGE[status]}
      inputPropsList={[
        {
          placeholder: "123",
          maxLength: CVC_MAX_LENGTH,
          fullWidth: true,
          value: CVC,
          onChange: (e) => {
            const input = e.target.value;
            handleCVCChange(input);
          },
          onBlur: (e) => {
            const input = e.target.value;
            handleCVCBlur(input);
          },
          state: status === "DEFAULT" ? "default" : "error",
        },
      ]}
    />
  );
};

export default CardCVCInputField;
