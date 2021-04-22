import styled from 'styled-components';
import { BAEMINT } from '../../constants/palette';

interface Props {
  color?: string;
}

const Button = styled.button<Props>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: ${({ color }) => BAEMINT || color};
`;

export default Button;
