import { css } from '@emotion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary';
  size?: 'lg' | 'md';
  rounded?: boolean;
}

export default function Button({ variant = 'primary', size = 'md', rounded = true, children, ...props }: ButtonProps) {
  return (
    <button css={[buttonStyle, variants[variant], sizes[size], rounded ? roundedStyle : null]} {...props}>
      {children}
    </button>
  );
}

const buttonStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const roundedStyle = css`
  border-radius: 5px;
`;

const sizes = {
  lg: css`
    height: 52px;
    font-weight: 700;
    font-size: 16px;
  `,
  md: css`
    height: 44px;
    font-weight: 700;
    font-size: 15px;
  `,
};

const variants = {
  primary: css`
    background-color: var(--color-background-button-primary);
    color: white;
  `,
};
