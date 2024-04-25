import * as Styled from './style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, ...props }: ButtonProps) => {
  return <Styled.Button {...props}>{label}</Styled.Button>;
};

export default Button;
