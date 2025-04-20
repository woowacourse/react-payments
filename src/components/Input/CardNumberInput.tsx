import styles from "./CardNumberInput.module.css";

type CardNumberInputProps = {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  errorMessage?: string;
};

const DEFAULT_PLACEHOLDER = "1234";
const DEFAULT_ERROR_MESSAGE = "";

export default function CardNumberInput({
  value,
  onChange,
  placeholder = DEFAULT_PLACEHOLDER,
  errorMessage = DEFAULT_ERROR_MESSAGE,
}: CardNumberInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <input
      className={`${styles["input-number"]} ${
        errorMessage ? styles["error"] : DEFAULT_ERROR_MESSAGE
      }`}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  );
}
