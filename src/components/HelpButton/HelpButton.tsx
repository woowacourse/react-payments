import { BsQuestionCircle } from 'react-icons/bs';
import styles from './HelpButton.module.css';
import React from 'react';

type HelpButtonProps = {
  message: string;
};

const HelpButton = React.memo(({ message }: HelpButtonProps) => {
  const showMessage = () => {
    alert(message);
  };

  return (
    <div className={styles.container}>
      <BsQuestionCircle className={styles.button} onClick={showMessage} />
    </div>
  );
});

export default HelpButton;
