import styles from '../css/input.module.css';

type InputFieldProps = {
  value: number | '';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
};

const InputField = ({ value, onChange, isError = false }: InputFieldProps) => {
  console.log(isError, 'hello');
  return (
    <input
      value={value}
      onChange={onChange}
      className={`${styles.input} ${isError ? styles.error : styles.basic}`}
      placeholder="숫자"
    />
  );
};

export default InputField;
