import styles from './style.module.css';

interface FormErrorMessageProps {
  errorMessage?: string;
}

function FormErrorMessage(props: FormErrorMessageProps) {
  const { errorMessage } = props;

  return <div className={styles.message}>{errorMessage}</div>;
}

export default FormErrorMessage;
