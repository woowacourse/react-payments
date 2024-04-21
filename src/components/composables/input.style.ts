import { styled } from 'styled-components';

export const Input = styled.input<{ isError: boolean }>`
  border: 1px solid #acacac;
  padding: 8px;
  font-size: 0.6875rem;
  border-radius: 2px;
  min-width: 71.25px;
  height: 32px;
  flex: 1;

  &:focus {
    border: 1px solid ${(props) => (props.isError ? '#ff3d3d' : '#000')};
  }
`;
