import InputField from "@components/InputField.tsx";
import type { InputStatus } from "@components/CardNumberInputField.tsx";
import { useState } from "react";

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

  const formatMonth = (nextRaw: string, prev: string) => {
    const onlyNumber = nextRaw.replace(/\D/g, "");

    if (onlyNumber === "") return "";

    if (onlyNumber.length === 1) {
      if (onlyNumber === "0") return "0";

      return `0${onlyNumber}`;
    }

    if (prev === "0") {
      if (onlyNumber === "00") return "0";

      return onlyNumber.slice(0, 2);
    }

    if (onlyNumber.startsWith("0")) {
      return onlyNumber.slice(1, 3);
    }

    return onlyNumber.slice(0, 2);
  };

  const handleValidityPeriodChange = (
    key: keyof ValidityPeriod,
    value: string,
  ) => {
    if (key === "month") {
      if (value.length !== 0 && value.length <= 2)
        if (
          Number.isNaN(+value) ||
          +value < 0 ||
          +value > 12 ||
          +value !== +parseInt(value)
        )
          return setStatus((prev) => ({ ...prev, month: "error" }));
      setStatus((prev) => ({ ...prev, month: "default" }));
    }

    if (key === "year") {
      if (value.length !== 0)
        if (Number.isNaN(+value) || +value < 0 || +value !== +parseInt(value))
          return setStatus((prev) => ({ ...prev, year: "error" }));
      setStatus((prev) => ({ ...prev, year: "default" }));
    }

    const newValidityPeriod = { ...validityPeriod };

    newValidityPeriod[key] = formatMonth(value, validityPeriod.month);

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
