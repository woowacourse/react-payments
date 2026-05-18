import styled from '@emotion/styled';

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  border-radius: 3px;
  padding: 8px;
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
`;

export default Input;
