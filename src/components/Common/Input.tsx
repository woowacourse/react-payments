import type { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

const Input = styled.input<{ style?: never; customStyle?: SerializedStyles }>`
  width: 100%;
  font-size: var(--font-size-m);
  border-radius: var(--radius-s);
  padding: var(--spacing-8);
  border: 1px solid var(--color-border);

  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-gray-100);
    color: var(--color-gray-500);
    border-color: var(--color-gray-300);
  }

  &:focus {
    border-color: var(--color-black);
    outline: 0;
  }

  &[data-is-error='true'] {
    border-color: var(--color-error);
  }

  ${(props) => props.customStyle}
`;

export default Input;
