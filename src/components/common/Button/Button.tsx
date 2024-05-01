import React from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

interface ButtonProps {
  text: string;
  theme: 'submit' | 'default';
  type: 'submit' | 'reset' | 'button';
  isActive?: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export default function Button({
  text,
  theme,
  isActive = true,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, {
        [styles[theme]]: theme,
        [styles.active]: isActive,
      })}
      {...props}
    >
      {text}
    </button>
  );
}
