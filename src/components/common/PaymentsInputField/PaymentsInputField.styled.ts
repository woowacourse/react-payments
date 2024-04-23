import styled from 'styled-components';

export const Input = styled.input<{ hasError?: boolean; width?: number }>`
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  padding: 8px;
  border-radius: 2px;
  border: ${(props) =>
    props.hasError ? 'solid 1px #ff3d3d' : 'solid 1px #acacac'};

  &:focus {
    outline: none;
    border: ${(props) =>
      props.hasError ? 'solid 1px #ff3d3d' : 'solid 1px #000000'};
  }

  &::placeholder {
    color: #acacac;
  }
`;
