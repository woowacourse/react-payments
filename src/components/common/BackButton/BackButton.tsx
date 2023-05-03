import styles from './BackButton.module.css';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { ReactNode } from 'react';

type BackButtonProps = {
  children: ReactNode;
  href: string;
};

const BackButton = ({ children, href }: BackButtonProps) => {
  return (
    <Link to={href}>
      <button className={styles.button}>
        <BiArrowBack className={styles.icon} />
        <p className={styles.title}>{children}</p>
      </button>
    </Link>
  );
};

export default BackButton;
