import styles from './inputField.module.css';

type InputFieldProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  placeholder: string;
  onBlur: () => void;
};

const InputField = ({
  value,
  onChange,
  isError = false,
  placeholder,
  onBlur,
}: InputFieldProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`${styles.input} ${isError ? styles.error : styles.basic}`}
      placeholder={placeholder}
    />
  );
};

export default InputField;
