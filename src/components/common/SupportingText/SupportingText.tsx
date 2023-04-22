import styles from './style.module.css';
import { SupportingTextMessage } from '../../../types';

interface SupportingTextProps {
  message: SupportingTextMessage;
  isError?: boolean;
}

function SupportingText({ message, isError = false }: SupportingTextProps) {
  return (
    <p className={`${styles.message} ${isError ? styles.error : ''}`}>
      {isError ? message.error : message.default}
    </p>
  );
}

export default SupportingText;
