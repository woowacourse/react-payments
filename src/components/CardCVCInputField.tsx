import InputField from "./InputField.tsx";

interface CardCVCInputFieldProps {
  CVC: string;
  onChange: (CVC: string) => void;
}

const CardCVCInputField = ({ CVC, onChange }: CardCVCInputFieldProps) => {
  return (
    <InputField
      title="CVC 번호를 입력해 주세요"
      label="카드 번호"
      inputPropsList={[
        {
          placeholder: "123",
          fullWidth: true,
          value: CVC,
          onChange: (e) => {
            const input = e.target.value;
            onChange(input);
          },
        },
      ]}
    />
  );
};

export default CardCVCInputField;
