import styles from './style.module.css';
import { ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
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
        {isOverlayPage && <Button variant="textButton" icon={leftIcon}></Button>}
      </Link>
      <h3 className="center-hoz-item">{content}</h3>
    </header>
  );
}

export default Header;
