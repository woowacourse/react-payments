import { css } from '@emotion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children?: React.ReactNode;
}

const variantStyles = {
  primary: css`
    background: var(--color-button-primary-background);
    color: var(--color-button-primary-text);
  `,
  secondary: css`
    background: transparent;
    border: 1px dashed #e6e6e6;
    color: #8c8c8c;
  `,
  ghost: css`
    background: none;
    border: none;
    color: #8c8c8c;
    width: auto;
    height: auto;
    font-size: 16px;
    font-weight: normal;
    padding: 4px;
  `,
};

export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <button css={[baseButtonStyle, variantStyles[variant]]} {...props}>
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
