import React from 'react';
import styles from './FooterButton.module.css';

type FooterButtonProps = {
  title: string;
};

const FooterButton = ({ title }: FooterButtonProps) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>{title}</button>
    </div>
  );
};

export default React.memo(FooterButton);
