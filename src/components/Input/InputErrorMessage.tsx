import styles from "./InputErrorMessage.module.css";

interface InputErrorMessageProps {
  message: string;
}

export default function InputErrorMessage({ message }: InputErrorMessageProps) {
  if (!message) return null;
  return <div className={styles["input-error-message"]}>{message}</div>;
}
