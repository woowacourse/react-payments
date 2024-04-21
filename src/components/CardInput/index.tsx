import { ReactNode, useId } from 'react';

import styles from './style.module.css';

interface CardInputProps {
  label: string;
  /**
   * input 요소들
   */
  children: ReactNode;
}

export default function CardInput(props: CardInputProps) {
  const { label, children } = props;
  const id = useId();

  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div id={id}>{children}</div>
    </div>
  );
}
