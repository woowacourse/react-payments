import type { ValidityPeriod } from "../pages/AddNewCardPage.tsx";
import InputField from "./InputField.tsx";

interface CardValidityPeriodInputFieldProps {
  validityPeriod: ValidityPeriod;
  onChange: (validityPeriod: ValidityPeriod) => void;
}

const CardValidityPeriodInputField = ({
  validityPeriod,
  onChange,
}: CardValidityPeriodInputFieldProps) => {
  const handleValidityPeriodChange = (
    key: keyof ValidityPeriod,
    value: string,
  ) => {
    const newValidityPeriod = { ...validityPeriod };
    newValidityPeriod[key] = value.slice(0, 2);
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
        },
        {
          placeholder: "YY",
          fullWidth: true,
          value: validityPeriod.year,
          onChange: (e) => {
            const input = e.target.value;
            handleValidityPeriodChange("year", input);
          },
        },
      ]}
    />
  );
};

export default CardValidityPeriodInputField;
