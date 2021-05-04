import styled, { keyframes } from 'styled-components/macro';
import PALETTE from '../../../styles/palette';

const Root = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const slideup = (height) => keyframes`
  from {
    height: 0px;
  }

  to {
    height: ${height}px;
  }
`;

const ActionSheetInner = styled.div`
  position: absolute;
  bottom: 2px;
  width: -webkit-fill-available;
  margin: 2px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  background-color: ${PALETTE.COLOR_SELECTOR_WHITE};
  border-radius: 8px;
  animation: ${({ optionsLength }) => slideup(optionsLength * 51)} 0.5s ease;
`;

const Option = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${PALETTE.COLOR_SELECTOR_OPACITY};
  color: ${({ color }) => color || PALETTE.DEFAULT_CYAN};
  text-align: center;
  padding: 16px 0;
  cursor: pointer;
  &: hover {
    background-color: ${PALETTE.COLOR_SELECTOR_OPACITY};
  }
`;

export { Root, ActionSheetInner, Option };
