import styles from "./CardNumberInput.module.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  errorMessage?: string;
  type: "text" | "password";
};

export default function NumberInput({

export default function CardNumberInput({
  value,
  onChange,
  placeholder = "1234",
  errorMessage = "",
  type = "text",
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <input
      className={`${styles["input-number"]} ${
        errorMessage ? styles["error"] : ""
      }`}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      type={type}
    />
  );
}
