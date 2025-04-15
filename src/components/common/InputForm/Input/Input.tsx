import styles from './Input.module.css';

export interface InputProps {
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id?: string;
  placeholder?: string;
}

function Input({ type, onChange, name, id, placeholder }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      className={`${styles.input} tx-md`}
    />
  );
}

export default Input;
