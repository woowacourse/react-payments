import InputField from "./InputField.tsx";

const CardCVCInputField = () => {
  return (
    <InputField
      title="CVC 번호를 입력해 주세요"
      label="카드 번호"
      inputPropsList={[{ placeholder: "123", fullWidth: true }]}
    />
  );
};

export default CardCVCInputField;
