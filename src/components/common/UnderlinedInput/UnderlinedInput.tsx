import styles from './UnderlinedInput.module.css';

type UnderlinedInputProps = {
  width: string;
  name: string;
  placeholder: string;
};

const UnderlinedInput = ({ width = '50%', name, placeholder }: Partial<UnderlinedInputProps>) => {
  return <input className={styles.input} name={name} style={{ width: width }} placeholder={placeholder} />;
};

export default UnderlinedInput;
