import React from 'react';
import styles from './InputContainer.module.css';

type propsType = {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
};

const InputContainer = ({ children, title, subTitle }: propsType) => {
  return (
    <div className={styles.inputContainer}>
      <h2 className={styles.inputTitle}>{title}</h2>
      <p className={styles.inputSubTitle}>{subTitle}</p>
      {children}
    </div>
  );
};

export default InputContainer;
