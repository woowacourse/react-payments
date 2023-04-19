import styles from './Input.module.css';

type InputProps = {
  width: string;
  value: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ width, value, maxLength, onChange }: InputProps) => {
  return (
    <>
      <input
        className={styles.input}
        style={{ width: width }}
        value={value}
        maxLength={maxLength ? maxLength : 9999999}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
