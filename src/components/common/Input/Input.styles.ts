import styled from '@emotion/styled';

export const StyledInput = styled.input<{ isError: boolean }>`
  border: 1px solid ${(props) => (props.isError ? '#f00' : '#acacac')};
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  &::placeholder {
    color: #acacac;
  }
  &:focus-visible {
    outline: none;
    border-color: #000;
  }
  ${(props) => props.isError && `outline: #f00`};
`;
