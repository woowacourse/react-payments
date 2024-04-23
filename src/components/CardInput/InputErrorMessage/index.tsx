import styles from './style.module.css';

interface InputErrorMessageProps {
  errorMessage?: string;
}

function InputErrorMessage(props: InputErrorMessageProps) {
  const { errorMessage } = props;

  return <div className={styles.message}>{errorMessage}</div>;
}

export default InputErrorMessage;
