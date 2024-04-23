import styled from 'styled-components';

export const Input = styled.input<{ $isValid: boolean }>`
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid
    ${(props) => (props.$isValid ? ({ theme }) => theme.color.primary.light : ({ theme }) => theme.color.error)};
  font-size: ${({ theme }) => theme.fontSize.base};

  &::placeholder {
    color: ${({ theme }) => theme.color.primary.light};
  }

  &:focus {
    border-color: ${(props) =>
      props.$isValid ? ({ theme }) => theme.color.primary.dark : ({ theme }) => theme.color.error};
  }
`;
