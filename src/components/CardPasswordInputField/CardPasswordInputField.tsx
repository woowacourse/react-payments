import { useState } from "react";
import { checkIsOnlyDigits, checkLengthMatches } from "@/utils/validator";
import {
  HELPER_MESSAGE,
  PASSWORD_MAX_LENGTH,
  type InputStatus,
} from "./constants";
import FormField from "@components/common/FormField";
import Input from "@components/common/Input";

interface CardPasswordInputFieldProps {
  password: string;
  onChange: (password: string) => void;
}

const CardPasswordInputField = ({
  password,
  onChange,
}: CardPasswordInputFieldProps) => {
  const [status, setStatus] = useState<InputStatus>("DEFAULT");

  const handlePasswordChange = (input: string) => {
    if (!checkIsOnlyDigits(input)) {
      setStatus("NOT_NUMBER");
      return;
    }

    setStatus("DEFAULT");
    onChange(input.slice(0, PASSWORD_MAX_LENGTH));
  };

  const handlePasswordBlur = (input: string) => {
    if (input.length === 0) {
      setStatus("EMPTY");
      return;
    }

    if (!checkLengthMatches(input, PASSWORD_MAX_LENGTH)) {
      setStatus("INVALID_LENGTH");
      return;
    }

    setStatus("DEFAULT");
  };

  return (
    <FormField
      title="비밀번호를 입력해 주세요"
      caption="앞의 2자리를 입력해주세요."
      label="비밀번호 앞 2자리"
      helperMessage={HELPER_MESSAGE[status]}
    >
      <Input
        placeholder="••"
        type="password"
        maxLength={PASSWORD_MAX_LENGTH}
        fullWidth
        value={password}
        onChange={(e) => {
          const input = e.target.value;
          handlePasswordChange(input);
        }}
        onBlur={(e) => {
          const input = e.target.value;
          handlePasswordBlur(input);
        }}
        state={status === "DEFAULT" ? "default" : "error"}
      />
    </FormField>
  );
};

export default CardPasswordInputField;
