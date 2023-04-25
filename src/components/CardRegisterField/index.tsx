import type { ReactNode } from 'react';

import styles from './cardRegisterField.module.css';
import Tooltip from '../Tooltip';

interface Props {
  label: string;
  size: 'small' | 'medium' | 'fit';
  valueLength?: number;
  maxLength?: number;
  tooltipMessage?: string;
  split?: true;
  children: ReactNode;
}

const CardRegisterField = ({
  label,
  size,
  valueLength,
  maxLength,
  tooltipMessage,
  split,
  children,
}: Props) => {
  return (
    <label>
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

export default CardRegisterField;
