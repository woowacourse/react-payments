import styled from 'styled-components';

export const StyleBackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

export const StyleContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  box-sizing: border-box;

  padding: 32px 16px;

  border: 0;

  border-radius: 8px 8px 0px 0px;
  background: white;
`;
