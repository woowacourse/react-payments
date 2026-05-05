import { checkIsInt, validateMonthRange } from "@/utils/validator";
import InputField from "@components/common/InputField.tsx";
import { padValidityPeriodUnit } from "@utils/card";
import { useState } from "react";
import {
  MONTH_MAX_LENGTH,
  YEAR_MAX_LENGTH,
  HELPER_MESSAGE,
  type InputStatus,
} from "./constants";

export type ValidityPeriod = {
  month: string;
  year: string;
};
interface CardValidityPeriodInputFieldProps {
  validityPeriod: ValidityPeriod;
  onChange: (validityPeriod: ValidityPeriod) => void;
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
}: CardValidityPeriodInputFieldProps) => {
  const [status, setStatus] = useState<InputsStatuses>(INPUTS_STATUSES);

  const handleValidityPeriodChange = (
    key: keyof ValidityPeriod,
    input: string,
  ) => {
    if (input.length !== 0 && !checkIsInt(+input)) {
      setStatus((prev) => ({ ...prev, [key]: "NOT_NUMBER" }));
      return;
    }

    setStatus((prev) => ({ ...prev, [key]: "DEFAULT" }));
    onChange({
      ...validityPeriod,
      [key]: input.slice(
        0,
        key === "month" ? MONTH_MAX_LENGTH : YEAR_MAX_LENGTH,
      ),
    });
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

    if (key === "month")
      if (!validateMonthRange(+input)) {
        setStatus((prev) => ({ ...prev, month: "INVALID_MONTH_RANGE" }));
        return;
      }

    setStatus((prev) => ({ ...prev, [key]: "DEFAULT" }));

    const padded = padValidityPeriodUnit(input);
    if (padded === input) return;
    onChange({ ...validityPeriod, [key]: padded });
  };

  return (
    <InputField
      title="카드 유효기간을 입력해 주세요"
      caption="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
      inputPropsList={[
        {
          placeholder: "MM",
          maxLength: MONTH_MAX_LENGTH,
          fullWidth: true,
          value: validityPeriod.month,
          onChange: (e) => handleValidityPeriodChange("month", e.target.value),
          onBlur: (e) => handleValidityPeriodBlur("month", e.target.value),
          state: status.month === "DEFAULT" ? "default" : "error",
        },
        {
          placeholder: "YY",
          maxLength: YEAR_MAX_LENGTH,
          fullWidth: true,
          value: validityPeriod.year,
          onChange: (e) => handleValidityPeriodChange("year", e.target.value),
          onBlur: (e) => handleValidityPeriodBlur("year", e.target.value),
          state: status.year === "DEFAULT" ? "default" : "error",
        },
      ]}
      helperMessage={
        status.month !== "DEFAULT"
          ? HELPER_MESSAGE[status.month]
          : HELPER_MESSAGE[status.year]
      }
    />
  );
};

export default CardValidityPeriodInputField;
