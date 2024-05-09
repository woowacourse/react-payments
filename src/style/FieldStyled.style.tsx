import styled from 'styled-components';

export const Label = styled.p`
  color: var(--Text, #0a0d13);
  font-size: 12px;
  margin-bottom: 8px;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 8px;
`;

export const StyledInput = styled.input<{ $error: boolean }>`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ $error }) => ($error ? 'red' : 'grey')};
  outline-color: ${({ $error }) => ($error ? 'red' : 'grey')};
  border-radius: 3px;
`;

export const ErrorBox = styled.div`
  color: red;
  font-size: 9.5px;
`;
