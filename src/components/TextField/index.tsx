import { ChangeEventHandler } from 'react';

import styles from './textField.module.css';

interface Props {
  id: string;
  label: string;
  size: string;
  type: string;
  maxLength: number;
  required: boolean;
  onChange: (value: string) => void;
}

const TextField = ({
  id,
  label,
  size,
  type,
  maxLength,
  required,
  onChange,
}: Props) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input
        className={`${styles.input} ${styles[size]}`}
        id={id}
        type={type}
        required={required}
        maxLength={maxLength}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
