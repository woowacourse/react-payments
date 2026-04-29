import InputField from "./InputField.tsx";

const CardValidityPeriodInputField = () => {
  return (
    <InputField
      title="카드 유효기간을 입력해 주세요"
      caption="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
      inputPropsList={[
        { placeholder: "MM", fullWidth: true },
        { placeholder: "YY", fullWidth: true },
      ]}
    />
  );
};

export default CardValidityPeriodInputField;
