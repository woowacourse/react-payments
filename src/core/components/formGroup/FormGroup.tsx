import cn from 'classnames';
import styles from './FormGroup.module.css';

import type { FormGroupProps } from './types';
import { FormContainer } from '../formContainer';

export const FormGroup = ({ title, subTitle, label, children, errorMessage }: FormGroupProps) => {
  return (
    <fieldset className={cn(styles.formGroup)}>
      <div className={cn(styles.titleContainer)}>
        <div className={cn(styles.title)}>{title}</div>
        <div className={cn(styles.subTitle)}>{subTitle}</div>
      </div>
      <FormContainer label={label} errorMessage={errorMessage}>
        {children}
      </FormContainer>
    </fieldset>
  );
};
