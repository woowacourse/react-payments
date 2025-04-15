import { useState } from 'react';
import { ChangeEvent } from 'react';
import styles from './Input.module.css';

export default function Input({ placeholder }: { placeholder: string }) {
  const [value, setValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (Number.isNaN(+inputValue)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setValue(inputValue);
  };

  return (
    <input
      onChange={handleInputChange}
      value={value}
      className={`${styles.input} ${isValid ? styles.valid : styles.inValid}`}
      placeholder={placeholder}
    />
  );
}
