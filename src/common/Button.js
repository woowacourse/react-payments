import styled from 'styled-components';
import { color, fontWeight, fontSize } from '../global.styles';

const Button = styled.button`
  color: ${color.mint};
  background-color: white;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.small};
  border: 0;
`;

export default Button;
