import "./InputNumber.css";

type InputNumberProps = {
  onChange: (value: string) => void;
};

export default function InputNumber({ onChange }: InputNumberProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 4) {
      onChange(value);
    }
  };

  // TODO : value 추가

  return (
    <input
      className="input-number"
      maxLength={4}
      onChange={handleInputChange}
    />
  );
}
