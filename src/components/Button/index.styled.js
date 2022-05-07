import styled from 'styled-components';

export const Container = styled.button`
  width: fit-content;
  height: 44px;
  color: #04c09e;
  font-size: 14px;
  font-weight: 700;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    color: grey;
    cursor: progress;
  }
`;
