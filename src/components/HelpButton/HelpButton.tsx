import { BsQuestionCircle } from 'react-icons/bs';
import styles from './HelpButton.module.css';
import React from 'react';

type HelpButtonProps = {
  message: string;
};

const HelpButton = React.memo(({ message }: HelpButtonProps) => {
  return (
    <div className={styles.container}>
      <BsQuestionCircle className={styles.button} />
      <div className={styles.balloonMessageContainer}>
        <div className={styles.messageBox}>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
});

export default HelpButton;
