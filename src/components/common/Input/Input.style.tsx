import styled from 'styled-components';

export const Input = styled.input<{ $isValid: boolean }>`
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid ${(props) => (props.$isValid ? 'var(--grey-200)' : 'var(--error)')};
  font-size: var(--font-size-md);

  &:hover,
  &:focus {
    border-color: ${(props) => (props.$isValid ? 'var(--grey-600)' : 'var(--error)')};
  }
`;
