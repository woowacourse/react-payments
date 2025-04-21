import styles from "./Input.module.css";

type InputProps = {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  errorMessage?: string;
};

const DEFAULT_PLACEHOLDER = "1234";
const DEFAULT_ERROR_MESSAGE = "";

export default function Input({
  value,
  onChange,
  placeholder = DEFAULT_PLACEHOLDER,
  errorMessage = DEFAULT_ERROR_MESSAGE,
}: InputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
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
