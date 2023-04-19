import SupportingText from '../SupportingText/SupportingText';
import styles from './style.module.css';
import { ReactNode } from 'react';

interface InputContainerProps {
  label: string;
  id: string;
  children: ReactNode;
  supportingText?: string;
  characterCounter?: number[];
}

function InputContainer({
  label,
  id,
  children,
  supportingText,
  characterCounter,
}: InputContainerProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      {children}
      <div className={styles.subInformation}>
        {supportingText && <SupportingText message={supportingText} />}
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
