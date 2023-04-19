import SupportingText from '../SupportingText/SupportingText';
import styles from './style.module.css';
import { ReactNode } from 'react';

interface InputContainerProps {
  label: string;
  id: string;
  children: ReactNode;
  supportingText?: string;
}

function InputContainer({ label, id, children, supportingText }: InputContainerProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      {children}
      {supportingText && <SupportingText message={supportingText} />}
    </div>
  );
}

export default InputContainer;
