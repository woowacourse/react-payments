import styled from 'styled-components';
import { InputProps } from '../../types/props';

const InputWidth = {
  xl: '100%',
  l: '100px',
  m: '60px',
  s: '60px',
  xs: '45px',
};

export const Input = styled.input<InputProps>`
  width: ${(props) => InputWidth[props.width]};
  height: 45px;

  background-color: #ecebf1;

  border-radius: 10px;
  border: none;

  font-weight: 600;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: center;

  opacity: 0.6;
`;
