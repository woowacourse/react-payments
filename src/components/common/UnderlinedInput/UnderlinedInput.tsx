import styles from './UnderlinedInput.module.css';

type UnderlinedInputProps = {
  width?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UnderlinedInput = ({ width, name, placeholder }: UnderlinedInputProps) => {
  return <input className={styles.input} name={name} style={{ width: width }} placeholder={placeholder} />;
};

export default UnderlinedInput;
