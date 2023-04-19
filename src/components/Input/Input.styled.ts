import styled from 'styled-components';
import { InputProps } from '../../types/props';

const InputWidth = {
  small: '30px',
  middle: '60px',
  large: '100px',
};

export const Input = styled.input<InputProps>`
  height: 20px;
  width: ${(props) => InputWidth[props.width]};
`;
