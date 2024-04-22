import { ReactNode, useId } from 'react';

import styles from './style.module.css';

interface CardInputSectionProps {
  title?: string;
  subTitle?: string;
  childrenLabel?: string;
  /**
   * input 요소들
   */
  children: ReactNode;
}

function CardInputSection(props: CardInputSectionProps) {
  const { title, subTitle, childrenLabel, children } = props;
  const id = useId();

  return (
    <section className={styles.inputSection}>
      <div aria-description="input title">
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subTitle}</p>
      </div>
      <div className={styles.cardInputContainer}>
        <label className={styles.label} htmlFor={id}>
          {childrenLabel}
        </label>
        <div id={id} aria-description="input-group">
          {children}
        </div>
      </div>
    </section>
  );
}

export default CardInputSection;
