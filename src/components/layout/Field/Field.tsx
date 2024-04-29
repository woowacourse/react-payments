import styles from "./Field.module.css";
import React from "react";

interface FieldProps {
  title: string;
  description?: string;
  labelText?: string;
  errorMessage?: string;
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
    <fieldset className={styles.field}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>

      <label>
        <p className={styles.labelText}>{labelText}</p>
        <div className={styles.inputWrapper}>{children}</div>
      </label>

      <p className={styles.errorMessage}>{errorMessage}</p>
    </fieldset>
  );
}
