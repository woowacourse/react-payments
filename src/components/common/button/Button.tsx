import { ComponentProps } from 'react';
import styles from './Button.module.css';

type ButtonAttribute = Pick<
  ComponentProps<'button'>,
  'type' | 'name' | 'id' | 'value'
>;

export interface ButtonProps extends ButtonAttribute {
  handleButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  className: string;
}

function Button({
  type,
  name,
  id,
  handleButtonClick,
  title,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      name={name}
      id={id}
      onClick={handleButtonClick}
      className={`${styles.button} ${styles.buttonPrimary} tx-xl ${className}`}
    >
      {title}
    </button>
  );
}

export default Button;
