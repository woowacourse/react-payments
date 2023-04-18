import styles from './style.module.css';
import { ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';
import leftIcon from '../../../assets/left-icon.svg';

interface HeaderProps extends ComponentPropsWithoutRef<'header'> {
  content: string;
  isOverlayPage?: boolean;
}

function Header({ content, isOverlayPage = false, ...attributes }: HeaderProps) {
  return (
    <header className={styles.header} {...attributes}>
      {isOverlayPage && (
        <Link to={'/'}>
          <img src={leftIcon} alt="left back icon" />
        </Link>
      )}
      <h3>{content}</h3>
    </header>
  );
}

export default Header;
