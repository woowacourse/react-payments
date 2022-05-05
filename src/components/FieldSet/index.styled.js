import styled from 'styled-components';
export const Container = styled.fieldset`
  border: none;

  > * {
    &:last-child {
      margin-top: 10px;
    }
    &:first-child {
      display: block;
      margin-bottom: 10px;
    }
  }
`;
