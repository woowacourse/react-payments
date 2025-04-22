import styles from "./Input.module.css";

type InputProps = {
  textType?: TextType;
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  errorMessage?: string;
};

export type TextType = "text" | "password";

const DEFAULT_PLACEHOLDER = "1234";
const DEFAULT_ERROR_MESSAGE = "";

export default function Input({
  textType = "text",
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
      className={`${styles[`input-text`]} ${
        errorMessage ? styles["error"] : DEFAULT_ERROR_MESSAGE
      }`}
      type={textType === "password" ? "password" : ""}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  );
}
