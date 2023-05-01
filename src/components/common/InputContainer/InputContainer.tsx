import { forwardRef } from 'react';
import type { ComponentPropsWithRef, ForwardedRef, ReactNode } from 'react';
import type { SupportingTextMessage } from '../../../types';
import SupportingText from '../SupportingText/SupportingText';
import styles from './style.module.css';

interface InputContainerProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
  supportingText?: SupportingTextMessage;
  characterCounter?: {
    currentCount: number;
    maxCount: number;
  };
  isError?: boolean;
}

const InputContainer = (
  {
    children,
    className = '',
    supportingText,
    characterCounter,
    isError = false,
  }: InputContainerProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div ref={ref} className={`${className} ${styles.inputContainer}`}>
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
};

export default forwardRef(InputContainer);
