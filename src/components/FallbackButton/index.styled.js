import styled from 'styled-components';

export const Container = styled.button`
  width: 44px;
  height: 44px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  &:hover > div {
    border-left: 1px solid #04c09e;
    border-bottom: 1px solid #04c09e;
  }
  &:active > div {
    border-left: 1px solid #04c09e;
    border-bottom: 1px solid #04c09e;
  }
`;

export const Arrow = styled.div`
  border-left: 1px solid #111;
  border-bottom: 1px solid #111;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
`;
