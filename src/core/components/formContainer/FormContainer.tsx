import cn from 'classnames';
import styles from './FormContainer.module.css';
import type { FormContainerProps } from './types';

export const FormContainer = ({ label, children, errorMessage, isError }: FormContainerProps) => {
  return (
    <div className={cn(styles.formContainer)}>
      <label className={cn(styles.label)}>{label}</label>
      <div className={cn(styles.children)}>{children}</div>
      <div className={cn(styles.errorMessage, !isError && styles.hidden)}>{errorMessage}</div>
    </div>
  );
};
