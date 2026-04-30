import { useState } from "react";
import InputField from "@components/InputField.tsx";
import type { InputStatus } from "@components/CardNumberInputField.tsx";

interface CardCVCInputFieldProps {
  CVC: string;
  onChange: (CVC: string) => void;
}

const CardCVCInputField = ({ CVC, onChange }: CardCVCInputFieldProps) => {
  const [status, setStatus] = useState<InputStatus>("default");

  const handelCVCChange = (input: string) => {
    if (input.length !== 0)
      if (
        Number.isNaN(+input) ||
        +input < 0 ||
        +input > 999 ||
        +input !== +parseInt(input)
      ) {
        return setStatus("error");
      }

    setStatus("default");

    onChange(input.slice(0, 3));
  };

  return (
    <InputField
      title="CVC 번호를 입력해 주세요"
      label="카드 번호"
      helperMessage={status === "error" ? "숫자만 입력 가능합니다." : ""}
      inputPropsList={[
        {
          placeholder: "123",
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
