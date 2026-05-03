import InputField from "@/components/common/InputField";
import { padValidityPeriodUnit } from "@utils/card";
import { useState } from "react";

import { MONTH_MAX_LENGTH, YEAR_MAX_LENGTH } from "./constants";
import type { InputStatus } from "./errorMessage";
import ERROR_MESSAGE from "./errorMessage";
import { checkCardNumberInputStatus, formatValidityPeriod } from "./utils";

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
    value: string,
  ) => {
    const state = checkCardNumberInputStatus(key, value);
    setStatus((prev) => ({ ...prev, [key]: state }));

    if (state !== "DEFAULT") return;
    onChange({ ...validityPeriod, [key]: formatValidityPeriod(value) });
  };

  const handleValidityPeriodBlur = (key: keyof ValidityPeriod) => {
    const input = validityPeriod[key];

    if (input.length === 0)
      return setStatus((prev) => ({ ...prev, [key]: "EMPTY" }));

    const padded = padValidityPeriodUnit(input);

    if (padded === input) return;
    const state = checkCardNumberInputStatus(key, padded);
    setStatus((prev) => ({ ...prev, [key]: state }));

    if (state !== "DEFAULT") return;
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
          state: status.month === "DEFAULT" ? "default" : "error",
        },
        {
          placeholder: "YY",
          maxLength: YEAR_MAX_LENGTH,
          fullWidth: true,
          value: validityPeriod.year,
          onChange: (e) => handleValidityPeriodChange("year", e.target.value),
          onBlur: () => handleValidityPeriodBlur("year"),
          state: status.year === "DEFAULT" ? "default" : "error",
        },
      ]}
      helperMessage={
        ERROR_MESSAGE[status.month] || ERROR_MESSAGE[status.year] || ""
      }
    />
  );
};

export default CardValidityPeriodInputField;
