import styles from './UnderlinedInput.module.css';

type UnderlinedInputProps = {
  name: string;
  width?: string;
  placeholder?: string;
};

const UnderlinedInput = ({ name, width = '50%', placeholder }: UnderlinedInputProps) => {
  return <input className={styles.input} name={name} style={{ width: width }} placeholder={placeholder} />;
};

export default UnderlinedInput;
