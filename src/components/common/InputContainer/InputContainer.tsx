import styles from './style.module.css';
import { ReactNode } from 'react';
import SupportingText from '../SupportingText/SupportingText';

interface InputContainerProps {
  label: string;
  id: string;
  children: ReactNode;
  required?: boolean;
  supportingText?: string;
  isError?: boolean;
  characterCounter?: number[];
}

function InputContainer({
  label,
  id,
  children,
  required = false,
  supportingText,
  isError = false,
  characterCounter,
}: InputContainerProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>
      {children}
      <div className={styles.subInformation}>
        {supportingText && <SupportingText message={supportingText} isError={isError} />}
        {characterCounter && (
          <span className={styles.characterCounter}>
            {characterCounter[0]}/{characterCounter[1]}
          </span>
        )}
      </div>
    </div>
  );
}

export default InputContainer;
