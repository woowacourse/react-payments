import type { ReactNode } from 'react';

import Tooltip from '../Tooltip';

import styles from './textField.module.css';

interface Props {
  label: string;
  size?: 'small' | 'medium' | 'fit';
  valueLength?: number;
  maxLength?: number;
  tooltipMessage?: string;
  split?: boolean;
  toggleHelperText?: boolean;
  helperText?: { text: string; color: 'normal' | 'error' };
  children: ReactNode;
}

const TextField = ({
  label,
  size = 'fit',
  valueLength,
  maxLength,
  tooltipMessage,
  split = false,
  toggleHelperText,
  helperText,
  children,
}: Props) => {
  return (
    <label className={styles.label}>
      {label}
      {maxLength && (
        <span className={styles.valueLength}>
          {valueLength} / {maxLength}
        </span>
      )}
      <div
        className={`${styles.inputContainer} ${styles[size]} ${
          split ? styles.split : ''
        }`}
      >
        {children}
      </div>
      {tooltipMessage && (
        <div className={`${styles.tooltipContainer} ${styles[size]}`}>
          <Tooltip message={tooltipMessage} />
        </div>
      )}
      {helperText && (
        <p className={`${styles.helperText} ${styles[helperText.color]}`}>
          {toggleHelperText ? helperText.text : ''}
        </p>
      )}
    </label>
  );
};

export default TextField;
