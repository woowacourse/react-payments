import type { SupportingTextMessage } from "../../../types";
import styles from "./style.module.css";

interface SupportingTextProps {
  message: SupportingTextMessage;
  isError?: boolean;
}

const SupportingText = ({ message, isError = false }: SupportingTextProps) => {
  return (
    <p className={`${styles.message} ${isError ? styles.error : ""}`}>
      {isError ? message.error : message.default}
    </p>
  );
};

export default SupportingText;
