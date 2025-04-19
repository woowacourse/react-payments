import styled from '@emotion/styled';

export const StyledInput = styled.input<{ isError: boolean }>`
  border: 1px solid ${(props) => (props.isError ? '#f00' : '#acacac')};
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  &::placeholder {
    color: #acacac;
  }
  ${(props) => props.isError && `outline: #f00`};
`;
