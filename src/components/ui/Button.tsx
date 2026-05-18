import { css } from '@emotion/react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'dashed';
  size?: 'lg' | 'md' | 'sm';
  rounded?: boolean;
  loading?: boolean;
}

export default function Button({
  variant = 'solid',
  size = 'md',
  rounded = true,
  loading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={props.type ?? 'button'}
      css={[buttonStyle, variants[variant], sizes[size], rounded ? roundedStyle : null, loading ? loadingStyle : null]}
      {...props}
    >
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

const loadingStyle = css`
  background-color: var(--color-border-default);
  pointer-events: none;
  cursor: wait;
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
  sm: css`
    height: 40px;
    font-weight: 500;
    font-size: 13px;
  `,
};

const variants = {
  solid: css`
    background-color: var(--color-background-button-primary);
    color: white;

    :disabled {
      background-color: var(--color-border-default);
    }
  `,
  dashed: css`
    background-color: white;
    color: #8c8c8c;
    border: 1px dashed #e6e6e6;

    :disabled {
      color: var(--color-border-default);
    }
  `,
};
