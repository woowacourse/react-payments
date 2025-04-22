import styles from './InputSection.module.css';
import Input from '../Input/Input';
import { ReactNode } from 'react';

function Title({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

function SubTitle({ title }: { title: string }) {
  return <p>{title}</p>;
}

function TitleWrapper({ children }: { children: ReactNode }) {
  return <div className={styles.titleWrapper}>{children}</div>;
}

function Label({ text }: { text: string }) {
  return <label className={styles.inputTitle}>{text}</label>;
}

function Error({ message }: { message: string }) {
  return <p className={styles.errorMessage}>{message}</p>;
}

type InputField<T extends string = string> = {
  key: T;
  value: string;
};

type InputWrapperProps<T extends string = string> = {
  fields: InputField<T>[];
  onChange: (key: T, value: string) => void;
  valid: Record<T, boolean>;
  placeholders?: Record<T, string>;
  maxLength: number;
};

export function InputWrapper<T extends string = string>({
  fields,
  onChange,
  valid,
  placeholders = {} as Record<T, string>,
  maxLength
}: InputWrapperProps<T>) {
  return (
    <div className={styles.inputWrapper}>
      {fields.map((field) => (
        <Input
          key={field.key}
          value={field.value}
          isValid={valid[field.key]}
          placeholder={placeholders[field.key]}
          onChange={(e) => onChange(field.key, e.target.value)}
          maxLength={maxLength}
        />
      ))}
    </div>
  );
}

export const InputSection = {
  TitleWrapper,
  Title,
  SubTitle,
  Error,
  InputWrapper,
  Label
};
