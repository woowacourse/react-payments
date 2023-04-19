import { ReactNode } from 'react';
import styles from './CardInfoInput.module.css';

type CardInfoInputProps = {
  title: string;
  numberOfLetter?: number[];
  children: ReactNode;
};

const CardInfoInput = ({ title, numberOfLetter, children }: CardInfoInputProps) => {
  let currentLetter = 0;
  let maximumLetter = 0;

  if (numberOfLetter) {
    [currentLetter, maximumLetter] = numberOfLetter;
  }

  return (
    <div>
      <div className={styles.info}>
        <div>{title}</div>
        {numberOfLetter && (
          <div>
            {currentLetter}/{maximumLetter}
          </div>
        )}
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default CardInfoInput;
