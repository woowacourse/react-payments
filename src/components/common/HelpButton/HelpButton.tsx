import React from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import styles from './HelpButton.module.css';

type HelpButtonProps = {
  message: string;
  balloonWidth?: string;
};

const HelpButton = ({ message, balloonWidth = '200px' }: HelpButtonProps) => {
  return (
    <div className={styles.container}>
      <BsQuestionCircle className={styles.button} />
      <div className={styles.balloon} style={{ width: balloonWidth }}>
        {message}
      </div>
    </div>
  );
};

export default React.memo(HelpButton);
