import useFormValue from "@/components/common/FormContainer/useFormValue";
import InputField from "@/components/common/InputField";
import { checkIsInt, validateCVCRange } from "@/utils/validator";
import { useState } from "react";

import type { CardInfoFormState } from "../formState";

type InputStatus = "default" | "error";

interface CardPasswordFieldProps {
  onComplete?: () => void;
}

const PASSWORD_MAX_LENGTH = 2;

const CardPasswordField = ({ onComplete }: CardPasswordFieldProps) => {
  const { getValue, setValue } = useFormValue<CardInfoFormState>();
  const password = getValue("password");
  const [status, setStatus] = useState<InputStatus>("default");

  const handlePasswordChange = (input: string) => {
    if (input.length !== 0) {
      if (!checkIsInt(+input) || !validateCVCRange(+input)) {
        return setStatus("error");
      }
    }

    setStatus("default");

    setValue("password", input.slice(0, PASSWORD_MAX_LENGTH));

    if (input.length === PASSWORD_MAX_LENGTH && status !== "error") {
      onComplete?.();
    }
  };

  return (
    <InputField
      title="비밀번호를 입력해 주세요"
      caption="앞의 2자리를 입력해주세요"
      label="비밀번호 앞 2자리"
      helperMessage={status === "error" ? "숫자만 입력 가능합니다." : ""}
      inputPropsList={[
        {
          key: "password",
          placeholder: "**",
          maxLength: PASSWORD_MAX_LENGTH,
          type: "password",
          fullWidth: true,
          value: password,
          onChange: (e) => {
            const input = e.target.value;
            handlePasswordChange(input);
          },
          state: status,
          autoFocus: true,
        },
      ]}
    />
  );
};

export default CardPasswordField;
