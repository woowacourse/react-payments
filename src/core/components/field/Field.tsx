import styles from './Field.module.css';
import type { ReactNode } from 'react';

interface FieldProps {
  title: string;
  subTitle?: string;
  label?: string;
  children: ReactNode;
  errorMessage?: string;
}

export const Field = ({ title, subTitle, label, errorMessage = '', children }: FieldProps) => {
  return (
    <fieldset className={styles.formGroup}>
      <legend className={styles.legend}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
      </legend>
      <div className={styles.formWrapper}>
        <span className={styles.label}>{label}</span>
        <div className={styles.children}>{children}</div>
        <div className={styles.errorMessage} role="alert">
          {errorMessage}
        </div>
      </div>
    </fieldset>
  );
};
