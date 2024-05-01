import * as Styled from './style';

const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};

export default Button;
