import styled from 'styled-components';
import { StrictPropsWithChildren } from '../../../types/props';
import { MouseEventHandler } from 'react';

function FooterButton({
  size,
  children,
  onClick,
}: StrictPropsWithChildren<{
  size: 'middle' | 'large';
  onClick: MouseEventHandler<HTMLButtonElement>;
}>) {
  return (
    <StyledButton $size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ $size: 'middle' | 'large' }>`
  cursor: pointer;
  width: 100%;
  padding: ${(props) => (props.$size === 'large' ? '20px' : '16px')};
  background-color: #333333;
  color: #f3f3f3;
  font-weight: 700;
  font-size: ${(props) => (props.$size === 'large' ? '16px' : '14px')};
  border-radius: 8px;
  border: none;
`;

export default FooterButton;
