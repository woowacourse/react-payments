import styles from './Field.module.css';
import React from 'react';

interface FieldProps {
  title: string;
  description?: string;
  labelText: string;
  errMsg: string;
  children: React.ReactNode;
}

export default function Field({
  title,
  description,
  labelText,
  children,
  errMsg,
}: FieldProps) {
  return (
    <div className={styles.field}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>

      <label>
        <p className={styles.labelText}>{labelText}</p>
        <div className={styles.inputWrapper}>{children}</div>
      </label>

      <p className={styles.errMsg}>{errMsg}</p>
    </div>
  );
}
