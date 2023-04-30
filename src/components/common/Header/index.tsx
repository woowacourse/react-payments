import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

import styles from './header.module.css';

interface Props {
  title: string;
  previousButton?: boolean;
  children?: ReactNode;
}

const Header = ({ title, previousButton = false, children }: Props) => {
  const navigate = useNavigate();

  const handlePreviousButtonClick = () => {
    navigate(-1);
  };

  return (
    <header className={styles.header}>
      {previousButton && (
        <div className={styles.previousButton}>
          <Button type="button" onClick={handlePreviousButtonClick}>
            &lt;
          </Button>
        </div>
      )}
      <h1 className={styles.title}>{title}</h1>
      {children}
    </header>
  );
};

export default Header;
