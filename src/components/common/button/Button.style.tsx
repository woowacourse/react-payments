import styled, { css } from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  width?: 'auto' | 'full';
}

const getSizeStyles = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return `
        font-size: var(--font-size-small));
        padding: 0.5rem 1rem;
      `;
    case 'medium':
      return `
        font-size: var(--font-size-medium));
        padding: 0.6rem 1.2rem;
      `;
    case 'large':
      return `
        font-size: var(--font-size-large));
        padding: 0.8rem 1.6rem;
      `;
    default:
      return `
        font-size: var(--font-size-small));
        padding: 0.5rem 1rem;
        
      `;
  }
};

const Button = styled.button<ButtonProps>`
  background: var(--primary-color);
  width: ${({ width }) => (width === 'full' ? '100%' : 'auto')};
  border-radius: 3px;
  border: 1px solid var(--primary-color);
  color: var(--white);
  font-weight: 600;

  ${({ size }) => getSizeStyles(size)}

  ${({ primary }) =>
    !primary &&
    css`
      background: var(--white);
      color: var(--primary-color);
    `}

  &:disabled {
    background-color: var(--gray);
    border-color: var(--gray);
    color: var(--white);
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export default Button;
