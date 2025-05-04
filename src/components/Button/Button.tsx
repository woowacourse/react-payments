import styled from '@emotion/styled';
import { ReactNode, forwardRef } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const StyledButton = styled.button`
  width: 100%;
  height: 52px;
  gap: 10px;
  background-color: #333333;
  color: #fff;
  white-space: nowrap;
  font-weight: 700;
  cursor: pointer;
  margin-top: 20px;
`;
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, onClick }, ref) => {
  console.log(children);
  return (
    <StyledButton ref={ref} onClick={onClick}>
      {children}
    </StyledButton>
  );
});

export default Button;
