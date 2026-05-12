import cn from 'classnames';
import styles from './Field.module.css';
import type { FieldProps } from './types';

export const Field = ({ label, children, errorMessage, ...rest }: FieldProps) => {
  return (
    <div className={cn(styles.field)}>
      <label className={cn(styles.label)}>{label}</label>
      <div className={cn(styles.children)} {...rest}>
        {children}
      </div>
      <div className={cn(styles.errorMessage, errorMessage === '' && styles.hidden)}>{errorMessage}</div>
    </div>
  );
};
