import styled from 'styled-components';
import { COLOR, FONT_WEIGHT, FONT_SIZE } from '../constants/constant';

const Button = styled.button`
  color: ${COLOR.MINT};
  background-color: ${COLOR.WHITE};
  font-weight: ${FONT_WEIGHT.BOLD};
  font-size: ${FONT_SIZE.SMALL};
  border: 0;
  width: 100%;

  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

export default Button;
