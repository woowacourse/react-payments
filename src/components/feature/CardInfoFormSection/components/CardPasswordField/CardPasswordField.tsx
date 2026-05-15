import InputField from "@/components/common/InputField";
import { checkIsInt, validateCVCRange } from "@/utils/validator";
import { useFormValue } from "@hooks/useFormWrapper";

import type { CardInfoFormState } from "../../formState";

interface CardPasswordFieldProps {
  onComplete?: () => void;
}

const PASSWORD_MAX_LENGTH = 2;

const CardPasswordField = ({ onComplete }: CardPasswordFieldProps) => {
  const { getValue, setValue } = useFormValue<CardInfoFormState>();
  const password = getValue("password");
  const status = getValue("passwordStatus");

  const handlePasswordChange = (input: string) => {
    if (input.length !== 0) {
      if (!checkIsInt(+input) || !validateCVCRange(+input)) {
        return setValue("passwordStatus", "ERROR");
      }
    }

    setValue("passwordStatus", "DEFAULT");

    setValue("password", input.slice(0, PASSWORD_MAX_LENGTH));

    if (input.length === PASSWORD_MAX_LENGTH && status !== "ERROR") {
      onComplete?.();
    }
  };

  return (
    <InputField
      title="비밀번호를 입력해 주세요"
      caption="앞의 2자리를 입력해주세요"
      label="비밀번호 앞 2자리"
      helperMessage={status === "ERROR" ? "숫자만 입력 가능합니다." : ""}
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
          state: status === "ERROR" ? "error" : "default",
          autoFocus: true,
        },
      ]}
    />
  );
};

export default CardPasswordField;
