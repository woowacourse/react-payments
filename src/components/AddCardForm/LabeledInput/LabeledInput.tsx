import { ReactNode } from 'react';
import styles from './LabeledInput.module.css';

type LabeledInputProps = {
  title: string;
  numberOfLetter?: {
    current: number;
    max: number;
  };
  errorMessage?: string;
  children: ReactNode;
};

const LabeledInput = ({ title, numberOfLetter, errorMessage, children }: LabeledInputProps) => {
  return (
    <div>
      <label>
        <div className={styles.info}>
          <div>{title}</div>
          {numberOfLetter && (
            <div>
              {numberOfLetter.current}/{numberOfLetter.max}
            </div>
          )}
        </div>
        <div className={styles.children}>{children}</div>
      </label>
      <div className={styles['error-message']}>{errorMessage}</div>
    </div>
  );
};

export default LabeledInput;
