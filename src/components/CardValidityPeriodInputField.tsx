import {
  checkIsInt,
  validateMonthRange,
  validateYearRange,
} from "@/utils/validator";
import InputField from "@components/InputField.tsx";
import { formatValidityPeriod } from "@utils/card";
import { useState } from "react";

type InputStatus = "default" | "error";

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

  const handleValidityPeriodChange = (
    key: keyof ValidityPeriod,
    value: string,
  ) => {
    const newValidityPeriod = { ...validityPeriod };

    newValidityPeriod[key] = formatValidityPeriod(value, validityPeriod[key]);

    if (key === "month") {
      const month = newValidityPeriod.month;
      if (month.length !== 0)
        if (!checkIsInt(+month) || !validateMonthRange(+month))
          return setStatus((prev) => ({ ...prev, month: "error" }));
      setStatus((prev) => ({ ...prev, month: "default" }));
    }

    if (key === "year") {
      const year = newValidityPeriod.year;
      if (year.length !== 0)
        if (!checkIsInt(+year) || !validateYearRange(+year))
          return setStatus((prev) => ({ ...prev, year: "error" }));
      setStatus((prev) => ({ ...prev, year: "default" }));
    }

    onChange(newValidityPeriod);
  };

  return (
    <InputField
      title="카드 유효기간을 입력해 주세요"
      caption="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
      inputPropsList={[
        {
          placeholder: "MM",
          fullWidth: true,
          value: validityPeriod.month,
          onChange: (e) => {
            const input = e.target.value;
            handleValidityPeriodChange("month", input);
          },
          state: status.month,
        },
        {
          placeholder: "YY",
          fullWidth: true,
          value: validityPeriod.year,
          onChange: (e) => {
            const input = e.target.value;
            handleValidityPeriodChange("year", input);
          },
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
