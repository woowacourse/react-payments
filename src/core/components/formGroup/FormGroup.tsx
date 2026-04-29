import cn from 'classnames';
import styles from './FormGroup.module.css';

import type { ReactNode } from 'react';

interface FormGroupProps {
  title?: string;
  subTitle?: string;
  label?: string;
  children?: ReactNode;
  errorMessage?: string;
}

export const FormGroup = ({ title, subTitle, label, children, errorMessage }: FormGroupProps) => {
  return (
    <fieldset className={cn(styles.formGroup)}>
      <div className={cn(styles.titleContainer)}>
        <div className={cn(styles.title)}>{title}</div>
        <div className={cn(styles.subTitle)}>{subTitle}</div>
      </div>
      <div className={cn(styles.formContainer)}>
        <label className={cn(styles.label)}>{label}</label>
        <div className={cn(styles.children)}>{children}</div>
        <div className={cn(styles.errorMessage)}>{errorMessage}</div>
      </div>
    </fieldset>
  );
};
