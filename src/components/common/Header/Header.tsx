import styles from './style.module.css';
import { ComponentPropsWithoutRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import leftIcon from '../../../assets/left-icon.svg';

interface HeaderProps extends ComponentPropsWithoutRef<'header'> {
  content: string;
  isOverlayPage?: boolean;
}

function Header({ content, isOverlayPage = false, ...attributes }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className={styles.header} {...attributes}>
      {isOverlayPage && (
        <Button variant="textButton" icon={leftIcon} onClick={() => navigate(-1)}></Button>
      )}
      <h3 className="center-hoz-item">{content}</h3>
    </header>
  );
}

export default Header;
