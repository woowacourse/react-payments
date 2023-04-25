import React from 'react';
import styles from './FooterButton.module.css';

type FooterButtonProps = {
  title: string;
  disabled?: boolean;
};

const FooterButton = ({ title, disabled }: FooterButtonProps) => {
  return (
    <footer className={styles.container}>
      <button className={styles.button} disabled={disabled}>
        {title}
      </button>
    </footer>
  );
};

export default React.memo(FooterButton);
