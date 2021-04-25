import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';

const Root = styled.button`
  width: 51px;
  height: 34px;
  position: absolute;
  bottom: 16px;
  right: 25px;
  background-color: transparent;
  border-color: transparent;
  font-size: 14px;
  font-weight: 700;
  color: ${PALETTE.DEFAULT_CYAN};
  text-align: right;
`;

export { Root };
