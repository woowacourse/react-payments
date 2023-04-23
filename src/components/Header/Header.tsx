import React from 'react';
import styles from './Header.module.css';
import { SlArrowLeft } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  title: string;
  hasBackButton?: boolean;
};

const Header = ({ title, hasBackButton }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className={styles.container}>
      {hasBackButton && (
        <button className={styles.button} onClick={() => navigate(-1)}>
          <SlArrowLeft />
        </button>
      )}
      <p className={styles.title}>{title}</p>
    </header>
  );
};

export default React.memo(Header);
