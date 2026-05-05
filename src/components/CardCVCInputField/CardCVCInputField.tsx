import { useState } from "react";
import InputField from "@components/common/InputField.tsx";
import { checkIsInt, validateCVCRange } from "@/utils/validator";

type InputStatus = "default" | "error";

interface CardCVCInputFieldProps {
  CVC: string;
  onChange: (CVC: string) => void;
}

const CVC_MAX_LENGTH = 3;

const CardCVCInputField = ({ CVC, onChange }: CardCVCInputFieldProps) => {
  const [status, setStatus] = useState<InputStatus>("default");

  const handelCVCChange = (input: string) => {
    if (input.length !== 0)
      if (!checkIsInt(+input) || !validateCVCRange(+input)) {
        return setStatus("error");
      }

    setStatus("default");

    onChange(input.slice(0, CVC_MAX_LENGTH));
  };

  return (
    <InputField
      title="CVC 번호를 입력해 주세요"
      label="CVC"
      helperMessage={status === "error" ? "숫자만 입력 가능합니다." : ""}
      inputPropsList={[
        {
          placeholder: "123",
          maxLength: CVC_MAX_LENGTH,
          fullWidth: true,
          value: CVC,
          onChange: (e) => {
            const input = e.target.value;
            handelCVCChange(input);
          },
          state: status,
        },
      ]}
    />
  );
};

export default CardCVCInputField;
