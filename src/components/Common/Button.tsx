import { css } from '@emotion/react';
import styled from '@emotion/styled';

const variants = {
  default: css`
    border-radius: 8px;
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

const Button = styled.button<{ variant?: keyof typeof variants }>`
  border: 0;
  font-size: 14px;
  font-weight: 700;
  height: 52px;
  padding: 0 14px;

  ${({ variant }) => variants[variant ?? 'default']}

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
