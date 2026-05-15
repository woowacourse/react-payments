import type { ValidityPeriod } from "@/types/card";
import InputField from "@components/common/InputField";
import useFocus from "@hooks/useFocus";
import { useFormValue } from "@hooks/useFormWrapper";
import { padValidityPeriodUnit } from "@utils/card";

import type { CardInfoFormState } from "../../formState";
import { MONTH_MAX_LENGTH, YEAR_MAX_LENGTH } from "./constants";
import ERROR_MESSAGE from "./errorMessage";
import { checkCardNumberInputStatus, formatValidityPeriod } from "./utils";

interface CardValidityPeriodInputFieldProps {
  onComplete?: () => void;
}

const CardValidityPeriodInputField = ({
  onComplete,
}: CardValidityPeriodInputFieldProps) => {
  const { getValue, setValue } = useFormValue<CardInfoFormState>();
  const validityPeriod = getValue("validityPeriod");
  const status = getValue("validityPeriodStatus");
  const { registerInputRef, setNextFocus } = useFocus();

  const handleValidityPeriodChange = (
    key: keyof ValidityPeriod,
    value: string,
  ) => {
    const state = checkCardNumberInputStatus(key, value);
    setValue("validityPeriodStatus", { ...status, [key]: state });

    if (state !== "DEFAULT" && state !== "SUCCESS") return;

    const formattedValue = formatValidityPeriod(value);
    const next = { ...validityPeriod, [key]: formattedValue };
    setValue("validityPeriod", next);

    if (
      (key === "month" && value.length === MONTH_MAX_LENGTH) ||
      (key === "month" &&
        value.length < MONTH_MAX_LENGTH &&
        +value !== 1 &&
        +value !== 0)
    ) {
      setNextFocus();
    }

    if (
      next.month.length === MONTH_MAX_LENGTH &&
      next.year.length === YEAR_MAX_LENGTH
    ) {
      onComplete?.();
    }
  };

  const handleValidityPeriodBlur = (
    key: keyof ValidityPeriod,
    rawValue: string,
  ) => {
    if (rawValue.length === 0)
      return setValue("validityPeriodStatus", { ...status, [key]: "EMPTY" });

    const padded = padValidityPeriodUnit(rawValue);

    if (padded === rawValue) return;
    const state = checkCardNumberInputStatus(key, padded);
    setValue("validityPeriodStatus", { ...status, [key]: state });

    if (state !== "DEFAULT") return;
    setValue("validityPeriod", { ...validityPeriod, [key]: padded });
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
          state: status.month === "DEFAULT" || status.month === "SUCCESS" ? "default" : "error",
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
          state: status.year === "DEFAULT" || status.year === "SUCCESS" ? "default" : "error",
        },
      ]}
      helperMessage={
        ERROR_MESSAGE[status.month] || ERROR_MESSAGE[status.year] || ""
      }
    />
  );
};

export default CardValidityPeriodInputField;
