import './customInput.css';

export interface CustomInputProps {
  type: string;
  placeholder: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  error?: boolean;
}

export default function CustomInput({
  type,
  placeholder,
  name,
  onChange,
  maxLength,
  error,
}: CustomInputProps) {
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
