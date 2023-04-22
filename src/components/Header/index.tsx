import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './header.module.css';

interface Props {
  title: string;
  previousButton?: true;
  children?: ReactNode;
}

const Header = ({ title, previousButton, children }: Props) => {
  const navigate = useNavigate();

  const handlePreviousButtonClick = () => {
    navigate(-1);
  };

  return (
    <header className={styles.header}>
      {previousButton && (
        <button
          type="button"
          className={styles.previousButton}
          onClick={handlePreviousButtonClick}
        >
          &lt;
        </button>
      )}
      <h1 className={styles.title}>{title}</h1>
      {children}
    </header>
  );
};

export default Header;
