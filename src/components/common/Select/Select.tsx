import React from 'react';

import clsx from 'clsx';
import styles from './Select.module.css';

interface Option {
  value: string;
  text: string;
}

interface SelectProps {
  options: Option[];
  defaultText: string;

  name: string;
  id: string;
  value: string;
  isError: boolean;
  isRequired?: boolean;
  handleSelect?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
}

export default function Select({
  options,
  defaultText,
  isError,
  isRequired = true,
  handleSelect,
  handleOnBlur,
  ...rest
}: SelectProps) {
  return (
    <select
      className={clsx(styles.select, { [styles.error]: isError })}
      required={isRequired}
      onChange={handleSelect}
      onBlur={handleOnBlur}
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
}
