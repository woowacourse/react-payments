import styles from './style.module.css';
import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'primary' | 'secondary' | 'danger' | 'textButton';
  size?: 'small' | 'medium' | 'large';
  icon?: string;
  children: string;
}

function Button({
  children,
  variant = 'default',
  size = 'medium',
  className,
  icon,
  ...attributes
}: ButtonProps) {
  const displayStyle = icon ? styles.iconButton : '';

  return (
    <button
      className={`${className} ${styles[variant]} ${styles[size]} ${displayStyle}`}
      {...attributes}
    >
      {icon && <img src={icon} alt="icon" />}
      {children}
    </button>
  );
}

export default Button;
