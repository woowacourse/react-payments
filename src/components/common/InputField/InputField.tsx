import styles from "./inputField.module.css";

type InputFieldProps = {
  value: string;
  onChange: (value: string) => void;
  isError?: boolean;
  placeholder: string;
};

const InputField = ({
  value,
  onChange,
  isError = false,
  placeholder,
}: InputFieldProps) => {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onBlur={(event) => onChange(event.target.value)}
      className={`${styles.input} ${isError ? styles.error : styles.basic}`}
      placeholder={placeholder}
    />
  );
};

export default InputField;
