import styled from 'styled-components';
export const Container = styled.fieldset`
  border: none;

  > * {
    &:first-child {
      display: block;
      margin-bottom: 10px;
    }
  }
`;

export const ErrorMessageContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;
