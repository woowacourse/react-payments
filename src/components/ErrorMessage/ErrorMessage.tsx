import { PropsWithChildren } from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <div role="alert" className={styles.errorContainer}>
      <span className={styles.color}>{children}</span>
    </div>
  );
};

export default ErrorMessage;
