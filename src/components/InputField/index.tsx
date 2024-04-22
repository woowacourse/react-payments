import { ReactNode, useId } from 'react';

import styles from './style.module.css';

interface InputFieldProps {
  label: string;
  /**
   * input 요소들
   */
  children: ReactNode;
}

function InputField(props: InputFieldProps) {
  const { label, children } = props;
  const id = useId();

  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div id={id}>{children}</div>
    </div>
  );
}
export default InputField;
