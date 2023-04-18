import styles from './style.module.css';
import { ComponentPropsWithoutRef } from 'react';
import leftIcon from '../../../assets/left-icon.svg';

interface HeaderProps extends ComponentPropsWithoutRef<'header'> {
  content: string;
}

function Header({ content, ...attributes }: HeaderProps) {
  return (
    <header className={styles.header} {...attributes}>
      <div>
        <img src={leftIcon} alt="left back icon" />
      </div>
      <h3>{content}</h3>
    </header>
  );
}

export default Header;
