import styles from "./FormField.module.css";
import { ReactNode } from "react";

interface FormFieldProps {
  title: string;
  guideText?: string;
  children: ReactNode;
}

function FormField({ title, guideText, children }: FormFieldProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {guideText && <p className={styles.guideText}>{guideText}</p>}
      {children}
    </div>
  );
}

export default FormField;
