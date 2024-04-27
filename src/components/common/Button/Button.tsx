import { convertPascalCase } from '@utils/string/string';

import styles from './Button.module.css';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'medium' | 'large';
  isFloating?: boolean;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({ children, onClick, size = 'medium', isFloating }) => {
  const buttonSizeStyleClass = `button${convertPascalCase(size)}`;

  const floatingButtonStyleClass = isFloating ? 'floatingButton' : 'buttonBorder';
  return (
    <button
      onClick={onClick}
      className={`${styles.baseButton} ${styles[buttonSizeStyleClass]} ${styles[floatingButtonStyleClass]}`}
    >
      {children}
    </button>
  );
};

export default Button;
