import type { ComponentPropsWithoutRef } from 'react';
import styles from './style.module.css';

type SpinnerProps = ComponentPropsWithoutRef<'div'>;

const Spinner = ({ className = '', ...attributes }: SpinnerProps) => {
  return (
    <div className={`${className} ${styles.container}`}>
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
