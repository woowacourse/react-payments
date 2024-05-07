/** @jsxImportSource @emotion/react */
import { ButtonStyle } from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button css={ButtonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
