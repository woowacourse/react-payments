import styled, { keyframes } from 'styled-components/macro';
import PALETTE from '../../../styles/palette';

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const slideup = keyframes`
  from {
    height: 0px;
  }

  to {
    height: 227px;
  }
`;

const SelectorInner = styled.div`
  position: absolute;
  bottom: 0;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 227px;
  padding: 34px 45px 41px 45px;
  background-color: ${PALETTE.COLOR_SELECTOR_WHITE};
  border-radius: 5px 5px 0px 0px;
  animation: ${slideup} 0.5s ease;
`;

export { Root, SelectorInner };
