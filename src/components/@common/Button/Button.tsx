import styled from "@emotion/styled";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  width: 375px;
  padding: 15px 100px;
  color: white;
  background: ${({ theme }) => theme.colors.black};
`;
