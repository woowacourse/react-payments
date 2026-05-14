import {
  checkExpiredValidityPeriod,
  checkIsOnlyDigits,
  checkLengthMatches,
  validateMonthRange,
} from "@/utils/validator";
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
import type { AddCardFormStepKey } from "@/constants/addCardForm";

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
    if (!checkIsOnlyDigits(input)) {
      setStatus((prev) => ({ ...prev, month: "NOT_NUMBER" }));
      return;
    }

    if (
      checkLengthMatches(input, MONTH_MAX_LENGTH) &&
      !validateMonthRange(+input)
    ) {
      setStatus((prev) => ({ ...prev, month: "INVALID_MONTH_RANGE" }));
      return;
    }

    if (
      checkLengthMatches(validityPeriod.year, YEAR_MAX_LENGTH) &&
      checkLengthMatches(input, MONTH_MAX_LENGTH) &&
      checkExpiredValidityPeriod(input, validityPeriod.year)
    ) {
      setStatus((prev) => ({ ...prev, month: "EXPIRED_VALIDITY_PERIOD" }));
      return;
    }

    onChange({
      ...validityPeriod,
      month: input.slice(0, MONTH_MAX_LENGTH),
    });
    setStatus((prev) => ({ ...prev, month: "DEFAULT" }));

    if (checkLengthMatches(input, MONTH_MAX_LENGTH)) {
      focusNextInput(0);
    }
  };

  const handleYearChange = (input: string) => {
    if (!checkIsOnlyDigits(input)) {
      setStatus((prev) => ({ ...prev, year: "NOT_NUMBER" }));
      return;
    }

    if (
      checkLengthMatches(validityPeriod.month, MONTH_MAX_LENGTH) &&
      checkLengthMatches(input, YEAR_MAX_LENGTH) &&
      checkExpiredValidityPeriod(validityPeriod.month, input)
    ) {
      setStatus((prev) => ({ ...prev, year: "EXPIRED_VALIDITY_PERIOD" }));
      return;
    }

    onChange({
      ...validityPeriod,
      year: input.slice(0, YEAR_MAX_LENGTH),
    });
    setStatus((prev) => ({ ...prev, year: "DEFAULT" }));

    if (checkLengthMatches(input, YEAR_MAX_LENGTH)) {
      onNextStep("VALIDITY_PERIOD");
    }
  };

  const handleValidityPeriodBlur = (
    key: keyof ValidityPeriod,
    input: string,
  ) => {
    if (input.length === 0) {
      setStatus((prev) => ({
        ...prev,
        [key]: key === "month" ? "EMPTY_MONTH" : "EMPTY_YEAR",
      }));
      return;
    }

    const maxLength = key === "month" ? MONTH_MAX_LENGTH : YEAR_MAX_LENGTH;

    if (!checkLengthMatches(input, maxLength)) {
      setStatus((prev) => ({
        ...prev,
        [key]: key === "month" ? "INVALID_MONTH_LENGTH" : "INVALID_YEAR_LENGTH",
      }));
      return;
    }

    setStatus((prev) => ({ ...prev, [key]: "DEFAULT" }));
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
