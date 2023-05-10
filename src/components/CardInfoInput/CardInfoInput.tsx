import { ReactNode } from 'react';
import styles from './CardInfoInput.module.css';

type CardInfoInputProps = {
  title: string;
  numberOfLetter?: number[];
  children: ReactNode;
};

const CardInfoInput = ({ title, numberOfLetter, children }: CardInfoInputProps) => {
  return (
    <section>
      <header className={styles.info}>
        <h5>{title}</h5>
        {numberOfLetter && (
          <div>
            <span>{numberOfLetter[0]}</span>
            <span>/</span>
            <span>{numberOfLetter[1]}</span>
          </div>
        )}
      </header>
      <div className={styles.children}>{children}</div>
    </section>
  );
};

export default CardInfoInput;
