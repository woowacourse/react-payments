import styled from '@emotion/styled';

export const Input = styled.input<{ isError: boolean }>`
  border: 1px solid ${({ theme, isError }) => (isError ? theme.colors.error : theme.colors.lightGray)};
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
  ${({ theme, isError }) => isError && `outline: ${theme.colors.error}`};
`;
