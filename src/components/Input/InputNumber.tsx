import styles from "./InputNumber.module.css";

type InputNumberProps = {
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
};

export default function InputNumber({
  onChange,
  placeholder = "1234",
  maxLength = 4,
}: InputNumberProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      onChange(value);
    }
  };

  // TODO : value 추가

  return (
    <input
      className={styles["input-number"]}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={handleInputChange}
    />
  );
}
