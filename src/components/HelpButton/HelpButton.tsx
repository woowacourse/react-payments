import { BsQuestionCircle } from 'react-icons/bs';
import styles from './HelpButton.module.css';
import React from 'react';

type HelpButtonProps = {
  message: string;
};

const HelpButton = ({ message }: HelpButtonProps) => {
  return (
    <section className={styles.container}>
      <BsQuestionCircle className={styles.button} />
      <aside className={styles.balloonMessageContainer}>
        <div className={styles.messageBox}>
          <p>{message}</p>
        </div>
      </aside>
    </section>
  );
};

export default React.memo(HelpButton);
