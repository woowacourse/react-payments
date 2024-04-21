import { ReactNode } from 'react';

import styles from './style.module.css';

interface InputErrorMessageProps {
  children: ReactNode;
}
function InputErrorMessage(props: InputErrorMessageProps) {
  const { children } = props;

  return <div className={styles.message}>{children}</div>;
}

export default InputErrorMessage;
