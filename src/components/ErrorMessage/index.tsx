import { ReactNode } from 'react';

import styles from './style.module.css';

interface ErrorMessageProps {
  children: ReactNode;
}
function ErrorMessage(props: ErrorMessageProps) {
  const { children } = props;

  return <div className={styles.message}>{children}</div>;
}

export default ErrorMessage;
