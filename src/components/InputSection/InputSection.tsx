import styles from './InputSection.module.css';

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

export const InputSection = {
  TitleWrapper,
  Title,
  SubTitle,
  Error,
  Label
};
