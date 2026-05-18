import { CVC_MAX_LENGTH, HELPER_MESSAGE, type InputStatus } from "./constants";
import FormField from "@components/common/FormField";
import Input from "@components/common/Input";
import { useState } from "react";
import { validateCVCInput } from "@/utils/validator";
import type { CardRegisterFormStepKey } from "@/constants/cardForm";

interface CardCVCInputFieldProps {
  CVC: string;
  onChange: (CVC: string) => void;
  onNextStep: (currentStepKey: CardRegisterFormStepKey) => void;
  serverErrorMessage?: string;
}

const CardCVCInputField = ({
  CVC,
  onChange,
  onNextStep,
  serverErrorMessage,
}: CardCVCInputFieldProps) => {
  const [status, setStatus] = useState<InputStatus>("DEFAULT");

  const handleCVCChange = (input: string) => {
    const nextCVC = input.slice(0, CVC_MAX_LENGTH);
    const validationStatus = validateCVCInput(nextCVC);

    onChange(nextCVC);

    if (validationStatus === "NOT_NUMBER") {
      setStatus("NOT_NUMBER");
      return;
    }

    setStatus("DEFAULT");

    if (validationStatus === "DEFAULT") {
      onNextStep("CVC");
    }
  };

  const handleCVCBlur = (input: string) => {
    const nextCVC = input.slice(0, CVC_MAX_LENGTH);
    const validationStatus = validateCVCInput(nextCVC);

    setStatus(validationStatus);
  };

  return (
    <FormField
      title="CVC 번호를 입력해 주세요"
      label="CVC"
      helperMessage={serverErrorMessage ?? HELPER_MESSAGE[status]}
    >
      <Input
        autoFocus
        placeholder="123"
        inputMode="numeric"
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
        state={serverErrorMessage || status !== "DEFAULT" ? "error" : "default"}
      />
    </FormField>
  );
};

export default CardCVCInputField;
