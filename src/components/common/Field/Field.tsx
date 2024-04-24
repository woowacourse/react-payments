import React from 'react';

import styles from './Field.module.css';

interface FieldProps {
  title: string;
  description?: string;
  labelText?: string;
  errorMessage: string;
  children: React.ReactNode;
}

export default function Field({
  title,
  description,
  labelText,
  children,
  errorMessage,
}: FieldProps) {
  return (
    <div className={styles.field}>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}

      <fieldset className={styles.fieldset}>
        {labelText && <legend className={styles.legend}>{labelText}</legend>}
        {children}
      </fieldset>

      <p className={styles.errorMsg}>{errorMessage}</p>
    </div>
  );
}
