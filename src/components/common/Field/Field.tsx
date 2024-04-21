import React from 'react';

import styles from './Field.module.css';

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
      {description && <p className={styles.description}>{description}</p>}

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{labelText}</legend>
        {children}
      </fieldset>

      <p className={styles.errMsg}>{errMsg}</p>
    </div>
  );
}
