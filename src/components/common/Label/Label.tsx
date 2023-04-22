import styles from './style.module.css';
import { ComponentPropsWithoutRef } from 'react';

interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  required?: boolean;
}

function Label({ children, required, ...attributes }: LabelProps) {
  return (
    <label className={styles.label} {...attributes}>
      {children} {required && <span className={styles.required}>*</span>}
    </label>
  );
}

export default Label;
