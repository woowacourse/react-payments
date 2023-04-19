import styles from './Input.module.css';

type InputProps = {
  width: string;
};

const Input = ({ width }: InputProps) => {
  return (
    <>
      <input className={styles.input} style={{ width: width }} />
    </>
  );
};

export default Input;
