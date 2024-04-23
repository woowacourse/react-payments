import styles from './style.module.css';

type InputType = 'text' | 'number';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  name?: string;
  value: string;
  maxLength?: number;
  placeholder: string;
  isError?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ isError = false, ...rest }: InputProps) {
  const className = `${styles.input} ${isError ? styles.error : ''}`;

  return <input className={className} {...rest} />;
}

export default Input;
