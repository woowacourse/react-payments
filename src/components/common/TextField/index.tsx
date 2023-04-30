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
  children: ReactNode;
}

const TextField = ({
  label,
  size = 'fit',
  valueLength,
  maxLength,
  tooltipMessage,
  split = false,
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
    </label>
  );
};

export default TextField;
