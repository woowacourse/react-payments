import styles from '../css/errorMessage.module.css';

const ErrorMessage = ({ message }: { message: string }) => {
  return <p className={styles.error}>{message}</p>;
};

export default ErrorMessage;
