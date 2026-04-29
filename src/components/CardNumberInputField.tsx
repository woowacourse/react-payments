import InputField from "./InputField.tsx";

const CardNumberInputField = () => {
  return (
    <InputField
      title="결제할 카드 번호를 입력해 주세요"
      caption="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
      inputPropsList={[
        { placeholder: "1234", fullWidth: true },
        { placeholder: "1234", fullWidth: true },
        { placeholder: "1234", fullWidth: true },
        { placeholder: "1234", fullWidth: true },
      ]}
    />
  );
};

export default CardNumberInputField;
