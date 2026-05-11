import { css } from '@emotion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary';
  children?: React.ReactNode;
}

export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <button css={[baseButtonStyle, variant === 'primary' ? primaryButtonStyle : undefined]} {...props}>
      {children}
    </button>
  );
}

const baseButtonStyle = css`
  width: 100%;
  height: 44px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const primaryButtonStyle = css`
  background: var(--color-button-primary-background);
  color: var(--color-button-primary-text);
`;
