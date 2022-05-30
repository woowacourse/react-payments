interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  handleClick?: (e?: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  theme: string;
}

const Button = ({ className, children, handleClick, theme }: ButtonProps) => {
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
