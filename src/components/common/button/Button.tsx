import { ComponentProps } from 'react';
import styles from './Button.module.css';

type ButtonAttribute = Pick<
  ComponentProps<'button'>,
  'type' | 'name' | 'id' | 'value'
>;

export interface ButtonProps extends ButtonAttribute {
  title: string;
  className: string;
  handleButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
