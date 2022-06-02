interface ButtonProps {
  className?: string;
  theme: string;
  handleClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  children?: React.ReactNode;
}

const Button = ({ className, theme, handleClick, children }: ButtonProps) => {
  return (
    <button className={`button-box ${className} font-${theme}`} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: 'default',
};

export default Button;
