import styled from 'styled-components';

export const Input = styled.input<{ $isValid: boolean }>`
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid ${(props) => (props.$isValid ? '#acacac' : '#ff3d3d')};
  font-size: 11px;

  &:focus {
    border-color: ${(props) => (props.$isValid ? '#000' : '#ff3d3d')};
  }
`;
