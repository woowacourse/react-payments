import { CustomInputProps } from '../type/types';
import './customInput.css';

export default function CustomInput({
  type,
  placeholder,
  name,
  onChange,
  maxLength,
  error,
}: CustomInputProps) {
  console.log('asdf', error);
  return (
    <input
      className={`custom-input ${error && 'custom-input-error'}`}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      name={name}
      maxLength={maxLength}
    />
  );
}
