import { ReactNode } from 'react';

import styles from './style.module.css';

interface FormErrorMessageProps {
  children: ReactNode;
}
function FormErrorMessage(props: FormErrorMessageProps) {
  const { children } = props;

  return <div className={styles.message}>{children}</div>;
}

export default FormErrorMessage;
