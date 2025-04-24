import styled from '@emotion/styled';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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

const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  height: ${({ height }) => height};

  background-color: #333333;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #222222;
  }
`;
