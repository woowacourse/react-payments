import { validateExpiryMonth, validateExpiryYear } from "@/utils/validator";
import { useState } from "react";
import {
  MONTH_MAX_LENGTH,
  YEAR_MAX_LENGTH,
  HELPER_MESSAGE,
  type InputStatus,
} from "./constants";
import useInputFocus from "@/hooks/useInputFocus";
import FormField from "@components/common/FormField";
import Input from "@components/common/Input";
import type { AddCardFormStepKey } from "@/constants/cardForm";

export type ValidityPeriod = {
  month: string;
  year: string;
};

interface CardValidityPeriodInputFieldProps {
  validityPeriod: ValidityPeriod;
  onChange: (validityPeriod: ValidityPeriod) => void;
  onNextStep: (currentStepKey: AddCardFormStepKey) => void;
}

type InputsStatuses = {
  [T in keyof ValidityPeriod]: InputStatus;
};

const INPUTS_STATUSES: InputsStatuses = {
  month: "DEFAULT",
  year: "DEFAULT",
};

const CardValidityPeriodInputField = ({
  validityPeriod,
  onChange,
  onNextStep,
}: CardValidityPeriodInputFieldProps) => {
  const [status, setStatus] = useState<InputsStatuses>(INPUTS_STATUSES);
  const { registerInput, focusNextInput } = useInputFocus();

  const handleMonthChange = (input: string) => {
    const nextMonth = input.slice(0, MONTH_MAX_LENGTH);
    const validationStatus = validateExpiryMonth(
      nextMonth,
      validityPeriod.year,
    );

    onChange({
      ...validityPeriod,
      month: nextMonth,
    });

    if (
      validationStatus === "NOT_NUMBER" ||
      validationStatus === "INVALID_MONTH_RANGE" ||
      validationStatus === "EXPIRED_VALIDITY_PERIOD"
    ) {
      setStatus((prev) => ({ ...prev, month: validationStatus }));
      return;
    }

    setStatus((prev) => ({ ...prev, month: "DEFAULT" }));

    if (validationStatus === "DEFAULT") {
      focusNextInput(0);
    }
  };

  const handleYearChange = (input: string) => {
    const nextYear = input.slice(0, YEAR_MAX_LENGTH);
    const validationStatus = validateExpiryYear(nextYear, validityPeriod.month);

    onChange({
      ...validityPeriod,
      year: nextYear,
    });

    if (
      validationStatus === "NOT_NUMBER" ||
      validationStatus === "EXPIRED_VALIDITY_PERIOD"
    ) {
      setStatus((prev) => ({ ...prev, year: validationStatus }));
      return;
    }

    setStatus((prev) => ({ ...prev, year: "DEFAULT" }));

    if (validationStatus === "DEFAULT") {
      onNextStep("VALIDITY_PERIOD");
    }
  };

  const handleValidityPeriodBlur = (
    key: keyof ValidityPeriod,
    input: string,
  ) => {
    if (key === "month") {
      const nextMonth = input.slice(0, MONTH_MAX_LENGTH);

      setStatus((prev) => ({
        ...prev,
        month: validateExpiryMonth(nextMonth, validityPeriod.year),
      }));
      return;
    }

    const nextYear = input.slice(0, YEAR_MAX_LENGTH);

    setStatus((prev) => ({
      ...prev,
      year: validateExpiryYear(nextYear, validityPeriod.month),
    }));
  };

  return (
    <FormField
      title="카드 유효기간을 입력해 주세요"
      caption="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
      helperMessage={
        status.month !== "DEFAULT"
          ? HELPER_MESSAGE[status.month]
          : HELPER_MESSAGE[status.year]
      }
    >
      <Input
        autoFocus
        ref={registerInput(0)}
        placeholder="MM"
        maxLength={MONTH_MAX_LENGTH}
        fullWidth
        value={validityPeriod.month}
        onChange={(e) => handleMonthChange(e.target.value)}
        onBlur={(e) => handleValidityPeriodBlur("month", e.target.value)}
        state={status.month === "DEFAULT" ? "default" : "error"}
      />
      <Input
        ref={registerInput(1)}
        placeholder="YY"
        maxLength={YEAR_MAX_LENGTH}
        fullWidth
        value={validityPeriod.year}
        onChange={(e) => handleYearChange(e.target.value)}
        onBlur={(e) => handleValidityPeriodBlur("year", e.target.value)}
        state={status.year === "DEFAULT" ? "default" : "error"}
      />
    </FormField>
  );
};

export default CardValidityPeriodInputField;
