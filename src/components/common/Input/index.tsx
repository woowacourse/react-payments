import styles from './style.module.css';

type InputType = 'text' | 'number';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  name?: string;
  value?: string | number;
  maxLength?: number;
  placeholder: string;
  isError?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({
  type = 'text',
  name = '',
  value,
  maxLength = 2,
  placeholder,
  isError = false,
  onChange,
}: InputProps) {
  const className = `${styles.input} ${isError ? styles.error : ''}`;

  return (
    <input
      className={className}
      type={type}
      name={name}
      value={value}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
