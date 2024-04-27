import * as Styled from './Button.styled';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  text?: string;
}

const Button = ({ text, ...restProps }: ButtonProps) => {
  return <Styled.Button {...restProps}>{text}</Styled.Button>;
};

export default Button;
