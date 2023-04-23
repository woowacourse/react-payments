import { ReactNode } from 'react';
import styles from './CardInfoInput.module.css';

type CardInfoInputProps = {
  title: string;
  numberOfLetter?: {
    current: number;
    max: number;
  };
  children: ReactNode;
};

const CardInfoInput = ({ title, numberOfLetter, children }: CardInfoInputProps) => {
  return (
    <div>
      <div className={styles.info}>
        <div>{title}</div>
        {numberOfLetter && (
          <div>
            {numberOfLetter.current}/{numberOfLetter.max}
          </div>
        )}
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default CardInfoInput;
