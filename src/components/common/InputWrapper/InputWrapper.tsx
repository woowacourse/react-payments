import styles from './InputWrapper.module.css';
import Input from '../Input/Input';

type InputField<T extends string = string> = {
  key: T;
  value: string;
};

type InputWrapperProps<T extends string = string> = {
  type?: string;
  fields: InputField<T>[];
  onChange: (key: T, value: string) => void;
  valid: Record<T, boolean>;
  placeholders?: Record<T, string>;
  maxLength: number;
  inputRefs?: Record<T, React.RefObject<HTMLInputElement | null>>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>, currentField: T) => void;
};

export function InputWrapper<T extends string = string>({
  type,
  fields,
  onChange,
  valid,
  placeholders = {} as Record<T, string>,
  maxLength,
  inputRefs = {} as Record<T, React.RefObject<HTMLInputElement | null>>,
  onKeyDown
}: InputWrapperProps<T>) {
  return (
    <div className={styles.inputWrapper}>
      {fields.map((field) => (
        <Input
          type={type}
          key={field.key}
          value={field.value}
          isValid={valid[field.key]}
          placeholder={placeholders[field.key]}
          onChange={(e) => onChange(field.key, e.target.value)}
          maxLength={maxLength}
          ref={inputRefs[field.key]}
          onKeyDown={(e) => onKeyDown?.(e, field.key)}
        />
      ))}
    </div>
  );
}
