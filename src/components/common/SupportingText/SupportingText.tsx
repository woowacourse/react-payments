import styles from './style.module.css';

interface SupportingTextProps {
  message: string;
  isError?: boolean;
}

function SupportingText({ message, isError = false }: SupportingTextProps) {
  return <p className={`${styles.message} ${isError && styles.error}`}>{message}</p>;
}

export default SupportingText;
