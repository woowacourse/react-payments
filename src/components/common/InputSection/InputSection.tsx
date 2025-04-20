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

type InputWrapperProps = {
  numbers: string[];
  onChange: (index: number, value: string) => void;
  valid: boolean[];
  placeholders?: string[];
  maxLength: number;
};

export function InputWrapper({ numbers, onChange, valid, placeholders = [], maxLength }: InputWrapperProps) {
  return (
    <div className={styles.inputWrapper}>
      {numbers.map((value, index) => (
        <Input
          key={index}
          value={value}
          isValid={valid[index]}
          placeholder={placeholders[index]}
          onChange={(e) => onChange(index, e.target.value)}
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
