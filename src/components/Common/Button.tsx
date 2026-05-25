import { css, type SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

const variants = {
  default: css`
    border-radius: var(--radius-l);
    background: var(--color-card-background);
    color: var(--color-white);

    &:disabled {
      background: var(--color-gray-300);
      color: var(--color-white);
    }
  `,
  ghost: css`
    background: transparent;
    color: var(--color-gray-900);

    &:disabled {
      color: var(--color-gray-300);
    }
  `,
};

const Button = styled.button<{ variant?: keyof typeof variants; style?: never; customStyle?: SerializedStyles }>`
  border: 0;
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-bold);
  height: 52px;
  padding: 0 var(--spacing-14);

  ${({ variant }) => variants[variant ?? 'default']}

  &:hover {
    cursor: pointer;
  }

  ${({ customStyle }) => customStyle}
`;

export default Button;
