import type { ReactNode } from 'react';

import styles from './cardRegisterField.module.css';
import Tooltip from '../Tooltip';
import TooltipButton from '../TooltipButton';

interface Props {
  label: string;
  size: 'small' | 'medium' | 'fit';
  valueLength?: number;
  maxLength?: number;
  tooltip?: true;
  split?: true;
  children: ReactNode;
}

const CardRegisterField = ({
  label,
  size,
  valueLength,
  maxLength,
  tooltip,
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
      {tooltip && (
        <div className={`${styles.tooltipContainer} ${styles[size]}`}>
          <Tooltip>
            <TooltipButton tabIndex={12} />
          </Tooltip>
        </div>
      )}
    </label>
  );
};

export default CardRegisterField;
