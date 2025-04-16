import styles from "./InputNumber.module.css";

type InputNumberProps = {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  maxLength?: number;
  errorMessage?: string;
};

export default function InputNumber({
  value,
  onChange,
  placeholder = "1234",
  maxLength = 4,
  errorMessage,
}: InputNumberProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      className={`${styles["input-number"]} ${
        errorMessage ? styles["error"] : ""
      }`}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={handleInputChange}
    />
  );
}
