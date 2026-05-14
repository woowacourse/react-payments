import { CVC_MAX_LENGTH, HELPER_MESSAGE, type InputStatus } from "./constants";
import FormField from "@components/common/FormField";
import Input from "@components/common/Input";
import { useState } from "react";
import { checkIsOnlyDigits, checkLengthMatches } from "@/utils/validator";
import type { AddCardFormStepKey } from "@/constants/addCardForm";

interface CardCVCInputFieldProps {
  CVC: string;
  onChange: (CVC: string) => void;
  onNextStep: (currentStepKey: AddCardFormStepKey) => void;
}

const CardCVCInputField = ({
  CVC,
  onChange,
  onNextStep,
}: CardCVCInputFieldProps) => {
  const [status, setStatus] = useState<InputStatus>("DEFAULT");

  const handleCVCChange = (input: string) => {
    if (!checkIsOnlyDigits(input)) {
      setStatus("NOT_NUMBER");
      return;
    }

    setStatus("DEFAULT");
    onChange(input.slice(0, CVC_MAX_LENGTH));

    if (checkLengthMatches(input, CVC_MAX_LENGTH)) {
      onNextStep("CVC");
    }
  };

  const handleCVCBlur = (input: string) => {
    if (input.length === 0) {
      setStatus("EMPTY");
      return;
    }

    if (!checkLengthMatches(input, CVC_MAX_LENGTH)) {
      setStatus("INVALID_LENGTH");
      return;
    }

    setStatus("DEFAULT");
  };

  return (
    <FormField
      title="CVC 번호를 입력해 주세요"
      label="CVC"
      helperMessage={HELPER_MESSAGE[status]}
    >
      <Input
        autoFocus
        placeholder="123"
        maxLength={CVC_MAX_LENGTH}
        fullWidth
        value={CVC}
        onChange={(e) => {
          const input = e.target.value;
          handleCVCChange(input);
        }}
        onBlur={(e) => {
          const input = e.target.value;
          handleCVCBlur(input);
        }}
        state={status === "DEFAULT" ? "default" : "error"}
      />
    </FormField>
  );
};

export default CardCVCInputField;
