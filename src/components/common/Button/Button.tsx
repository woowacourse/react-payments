import styles from './style.module.css';
import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  primary?: boolean;
  children: string;
}

function Button({ children, primary = false, className, ...attributes }: ButtonProps) {
  const visualStyle = primary ? styles.primaryButton : styles.secondaryButton;

  return (
    <button className={`${visualStyle} ${className}`} {...attributes}>
      {children}
    </button>
  );
}

export default Button;
