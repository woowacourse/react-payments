import styled from 'styled-components';

export const Input = styled.input<{ $isValid: boolean }>`
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid
    ${(props) => (props.$isValid ? ({ theme }) => theme.color.primary : ({ theme }) => theme.color.error)};
  font-size: ${({ theme }) => theme.fontSize.base};

  &:focus {
    border-color: ${(props) => (props.$isValid ? ({ theme }) => theme.color.dark : ({ theme }) => theme.color.error)};
  }
`;
