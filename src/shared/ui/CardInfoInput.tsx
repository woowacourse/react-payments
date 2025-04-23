import './cardInfoInput.css';

export interface CardInfoInputProps {
  type: string;
  placeholder: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  error?: boolean;
}

export default function CardInfoInput({
  type,
  placeholder,
  name,
  onChange,
  maxLength,
  error,
}: CardInfoInputProps) {
  return (
    <input
      className={`cardInfo-input ${error && 'cardInfo-input-error'}`}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      name={name}
      maxLength={maxLength}
    />
  );
}
