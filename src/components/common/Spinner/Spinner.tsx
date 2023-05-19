import type { ComponentPropsWithoutRef } from 'react';
import styles from './style.module.css';

interface SpinnerProps extends ComponentPropsWithoutRef<'div'> {
  size?: number;
}

const Spinner = ({ className = '', size = 70, ...attributes }: SpinnerProps) => {
  return (
    <div
      className={`${className} ${styles.container}`}
      style={{ width: `${size}px` }}
      {...attributes}
    >
      <svg className={styles.spinner} viewBox="25 25 50 50">
        <circle
          className={styles.path}
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
};

export default Spinner;
