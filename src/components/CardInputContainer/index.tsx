import React, { ReactNode } from 'react';
import styles from './style.module.css';

interface CardInputContainerProps {
  title: string;
  subTitle: string;
  /**
   * 커스텀한  CardInput
   */
  children: ReactNode;
}

function CardInputContainer(props: CardInputContainerProps) {
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

export default CardInputContainer;
