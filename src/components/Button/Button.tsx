import styled from '@emotion/styled';
import { forwardRef } from 'react';

type ButtonProps = {
  text: string;
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
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ text, onClick }, ref) => {
  return (
    <StyledButton ref={ref} onClick={onClick}>
      {text}
    </StyledButton>
  );
});

export default Button;
