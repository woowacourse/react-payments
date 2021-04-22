import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';

const Root = styled.button`
  position: relative;
  width: 208px;
  height: 130px;
  background-color: ${PALETTE.EMPTY_CARD};
  border-color: transparent;
  border-radius: 5px;
  font-size: 30px;
  cursor: pointer;
  color: ${PALETTE.BOLD_BLACK};
`;

export { Root };
