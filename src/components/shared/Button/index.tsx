import styled, { css } from 'styled-components';
import PALETTE from '../../../constants/palette';
import { bottomRight } from './styles';

interface Props {
  color?: string;
  position?: 'bottom-right';
}

const Button = styled.button<Props>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ color }) => PALETTE.BAEMINT || color};
  ${({ position }) => position === 'bottom-right' && bottomRight}
`;

export default Button;
