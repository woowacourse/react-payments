import styles from './style.module.css';
import { ReactNode } from 'react';
import { SupportingTextMessage } from '../../../types';
import SupportingText from '../SupportingText/SupportingText';

interface InputContainerProps {
  children: ReactNode;
  supportingText?: SupportingTextMessage;
  characterCounter?: {
    currentCount: number;
    maxCount: number;
  };
  isError?: boolean;
}

function InputContainer({
  children,
  supportingText,
  characterCounter,
  isError = false,
}: InputContainerProps) {
  return (
    <div className={styles.inputContainer}>
      {children}
      <div className={styles.subInformation}>
        {supportingText && <SupportingText message={supportingText} isError={isError} />}
        {characterCounter && (
          <span className={styles.characterCounter}>
            {characterCounter.currentCount}/{characterCounter.maxCount}
          </span>
        )}
      </div>
    </div>
  );
}

export default InputContainer;
