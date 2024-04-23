import { ReactNode } from 'react';

import styles from './style.module.css';

interface InputWrapProps {
  title: string;
  subTitle: string;
  children: ReactNode;
}

function InputWrap(props: InputWrapProps) {
  const { title, subTitle, children } = props;

  return (
    <section className={styles.inputSection}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subTitle}</p>
      </div>
      {children}
    </section>
  );
}

export default InputWrap;
