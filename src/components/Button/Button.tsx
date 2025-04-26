import StyledButton from './Button.styles';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  height?: string;
};

const Button = ({ height = '40px', children, ...props }: ButtonProps) => {
  return (
    <StyledButton height={height} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
