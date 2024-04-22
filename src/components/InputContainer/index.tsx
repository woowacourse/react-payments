import { ReactNode } from 'react';

import styles from './style.module.css';

interface InputContainerProps {
  title: string;
  subTitle: string;
  children: ReactNode;
}

function InputContainer(props: InputContainerProps) {
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

export default InputContainer;
