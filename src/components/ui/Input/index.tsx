import { css } from '@emotion/react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'error';
  ref?: React.Ref<HTMLInputElement>;
}

export default function Input({
  placeholder = '1234',
  value,
  type,
  onChange,
  variant = 'default',
  ref,
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      ref={ref}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
      css={[inputStyle, variants[variant]]}
    />
  );
}

const inputStyle = css`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  border: 1px solid;
  padding: 8px;

  font-size: 11px;
  line-height: 135%;

  ::placeholder {
    font-size: 11px;
    line-height: 135%;
    color: var(--color-text-placeholder);
  }

  :focus {
    outline: none;
    border: 1px solid var(--color-border-focus);
  }
`;

const variants = {
  default: css`
    border-color: var(--color-border-default);
  `,
  error: css`
    border-color: var(--color-border-error);

    :focus {
      border-color: var(--color-border-error);
    }
  `,
};
