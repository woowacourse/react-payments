import styles from './style.module.css';
import { ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';
import leftIcon from '../../../assets/left-icon.svg';

interface HeaderProps extends ComponentPropsWithoutRef<'header'> {
  content: string;
  path?: string;
  isOverlayPage?: boolean;
}

function Header({ content, path = '/', isOverlayPage = false, ...attributes }: HeaderProps) {
  return (
    <header className={styles.header} {...attributes}>
      <Link to={path}>
        {isOverlayPage && <img src={leftIcon} alt="left back icon" />}
        <h3>{content}</h3>
      </Link>
    </header>
  );
}

export default Header;
