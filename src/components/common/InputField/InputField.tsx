import styles from './inputField.module.css';

type InputFieldProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
      onChange={onChange}
      className={`${styles.input} ${isError ? styles.error : styles.basic}`}
      placeholder={placeholder}
    />
  );
};

export default InputField;
