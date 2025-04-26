import styled from "@emotion/styled";

interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  width: 375px;
  padding: 15px 100px;
  color: white;
  background: ${({ theme }) => theme.colors.black};
`;
