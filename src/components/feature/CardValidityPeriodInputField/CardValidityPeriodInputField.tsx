import InputField from "@/components/common/InputField";
import type { ValidityPeriod } from "@/types/card";
import { padValidityPeriodUnit } from "@utils/card";
import { useState } from "react";

import { MONTH_MAX_LENGTH, YEAR_MAX_LENGTH } from "./constants";
import type { InputStatus } from "./errorMessage";
import ERROR_MESSAGE from "./errorMessage";
import { checkCardNumberInputStatus, formatValidityPeriod } from "./utils";
import useFocus from "@/hooks/useFocus";

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
  const { registerInputRef, setNextFocus } = useFocus();

  const handleValidityPeriodChange = (
    key: keyof ValidityPeriod,
    value: string,
  ) => {
    const state = checkCardNumberInputStatus(key, value);
    setStatus((prev) => ({ ...prev, [key]: state }));

    if (state !== "DEFAULT") return;

    const formattedValue = formatValidityPeriod(value);
    onChange({ ...validityPeriod, [key]: formattedValue });

    // TODO: check 함수 추출하기
    if (
      (key === "month" && value.length === MONTH_MAX_LENGTH) ||
      (key === "month" &&
        value.length < MONTH_MAX_LENGTH &&
        +value !== 1 &&
        +value !== 0)
    ) {
      setNextFocus();
    }
  };

  const handleValidityPeriodBlur = (
    key: keyof ValidityPeriod,
    rawValue: string,
  ) => {
    if (rawValue.length === 0)
      return setStatus((prev) => ({ ...prev, [key]: "EMPTY" }));

    const padded = padValidityPeriodUnit(rawValue);

    if (padded === rawValue) return;
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
          ref: (el) => registerInputRef(0)(el),
          key: "month",
          placeholder: "MM",
          maxLength: MONTH_MAX_LENGTH,
          fullWidth: true,
          value: validityPeriod.month,
          onChange: (e) => handleValidityPeriodChange("month", e.target.value),
          onBlur: (e) => handleValidityPeriodBlur("month", e.target.value),
          state: status.month === "DEFAULT" ? "default" : "error",
          autoFocus: true,
        },
        {
          ref: (el) => registerInputRef(1)(el),
          key: "year",
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
        ERROR_MESSAGE[status.month] || ERROR_MESSAGE[status.year] || ""
      }
    />
  );
};

export default CardValidityPeriodInputField;
