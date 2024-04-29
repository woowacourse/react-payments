import React, { forwardRef } from 'react';

import clsx from 'clsx';
import styles from './Select.module.css';

interface Option {
  value: string;
  text: string;
}

interface SelectProps {
  options: readonly Option[];
  defaultText: string;

  name: string;
  id: string;
  value: string;
  isError: boolean;
  /** @defaultValue true */
  isRequired?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
}

const Select = forwardRef(function Select(
  {
    options,
    defaultText,
    isError,
    isRequired = true,
    onChange,
    onBlur,
    ...rest
  }: SelectProps,
  ref: React.ForwardedRef<HTMLSelectElement>
) {
  return (
    <select
      ref={ref}
      className={clsx(styles.select, { [styles.error]: isError })}
      required={isRequired}
      onChange={onChange}
      onBlur={onBlur}
      {...rest}
    >
      {defaultText && (
        <option value="" hidden selected>
          {defaultText}
        </option>
      )}
      {options.map(({ value, text }, index) => (
        <option key={index} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
});

export default Select;
