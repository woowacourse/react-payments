import styled from 'styled-components';

export const Input = styled.input<{ $isError: boolean }>`
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid
    ${(props) => (props.$isError ? ({ theme }) => theme.color.error : ({ theme }) => theme.color.primary.light)};
  font-size: ${({ theme }) => theme.fontSize.base};

  &::placeholder {
    color: ${({ theme }) => theme.color.primary.light};
  }

  &:focus {
    border-color: ${(props) =>
      props.$isError ? ({ theme }) => theme.color.error : ({ theme }) => theme.color.primary.dark};
  }
`;
