import {
  checkIsInt,
  validateMonthRange,
  validateYearRange,
} from "@/utils/validator";
import InputField from "@components/InputField.tsx";
import { formatValidityPeriod, padValidityPeriodUnit } from "@utils/card";
import { useState } from "react";

type InputStatus = "default" | "error";

const MONTH_MAX_LENGTH = 2;
const YEAR_MAX_LENGTH = 2;

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
  month: "default",
  year: "default",
};

const CardValidityPeriodInputField = ({
  validityPeriod,
  onChange,
}: CardValidityPeriodInputFieldProps) => {
  const [status, setStatus] = useState<InputsStatuses>(INPUTS_STATUSES);

  const validityPeriodChange = (
    key: keyof ValidityPeriod,
    rawValue: string,
  ): boolean => {
    if (/\D/.test(rawValue)) {
      setStatus((prev) => ({ ...prev, [key]: "error" }));
      return false;
    }
    const value = formatValidityPeriod(rawValue);
    if (key === "month") {
      if (value.length === 0) {
        setStatus((prev) => ({ ...prev, month: "default" }));
        return true;
      }
      if (!checkIsInt(+value)) {
        setStatus((prev) => ({ ...prev, month: "error" }));
        return false;
      }
      if (value.length === MONTH_MAX_LENGTH && !validateMonthRange(+value)) {
        setStatus((prev) => ({ ...prev, month: "error" }));
        return false;
      }
      setStatus((prev) => ({ ...prev, month: "default" }));
    }
    if (key === "year") {
      if (value.length === 0) {
        setStatus((prev) => ({ ...prev, year: "default" }));
        return true;
      }
      if (!checkIsInt(+value) || !validateYearRange(+value)) {
        setStatus((prev) => ({ ...prev, year: "error" }));
        return false;
      }
      setStatus((prev) => ({ ...prev, year: "default" }));
    }
    return true;
  };

  const handleValidityPeriodChange = (
    key: keyof ValidityPeriod,
    value: string,
  ) => {
    if (!validityPeriodChange(key, value)) return;
    onChange({ ...validityPeriod, [key]: formatValidityPeriod(value) });
  };

  const handleValidityPeriodBlur = (key: keyof ValidityPeriod) => {
    const padded = padValidityPeriodUnit(validityPeriod[key]);
    validityPeriodChange(key, padded);
    if (padded === validityPeriod[key]) return;
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
          onBlur: () => handleValidityPeriodBlur("month"),
          state: status.month,
        },
        {
          placeholder: "YY",
          maxLength: YEAR_MAX_LENGTH,
          fullWidth: true,
          value: validityPeriod.year,
          onChange: (e) => handleValidityPeriodChange("year", e.target.value),
          onBlur: () => handleValidityPeriodBlur("year"),
          state: status.year,
        },
      ]}
      helperMessage={
        status.month === "error" || status.year === "error"
          ? "숫자만 입력 가능합니다."
          : ""
      }
    />
  );
};

export default CardValidityPeriodInputField;
