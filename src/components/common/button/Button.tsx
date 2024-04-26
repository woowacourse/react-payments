import * as Styled from './Button.styled';

export interface ButtonProps extends React.ComponentPropsWithRef<'input'> {
  text?: string;
}

const Button = ({ text }: ButtonProps) => {
  return <Styled.Button>{text}</Styled.Button>;
};

export default Button;
