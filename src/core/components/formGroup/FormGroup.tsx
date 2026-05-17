import cn from 'classnames';
import styles from './FormGroup.module.css';

import type { FormGroupProps } from './types';

export const FormGroup = ({ title, subTitle, children, hide }: FormGroupProps) => {
  return (
    <fieldset className={cn(styles.formGroup, hide && styles.hide)}>
      <div className={cn(styles.titleContainer)}>
        <div className={cn(styles.title)}>{title}</div>
        <div className={cn(styles.subTitle)}>{subTitle}</div>
      </div>
      <div className={cn(styles.contentContainer)}>{children}</div>
    </fieldset>
  );
};
