import { ButtonHTMLAttributes } from 'react';
import { ButtonSize, ButtonType } from '../../../types/buttonType';
import styles from './Button.module.css';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  size: ButtonSize;
  buttonType: ButtonType;
}

function Button(props: Button) {
  const { name, size, buttonType, ...rest } = props;

  const buttonStyle = `${styles.button} ${styles[size]} ${styles[buttonType]}`;

  return (
    <button {...rest} className={buttonStyle}>
      {name}
    </button>
  );
}

export default Button;
