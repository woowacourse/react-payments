import styled from 'styled-components';
import { InputProps } from './Input';
import { COLOR } from '../../constants/card';

const InputWidth = {
  xl: '100%',
  l: '110px',
  m: '90px',
  s: '70px',
  xs: '40px',
};

export const Input = styled.input<InputProps>`
  display: block;

  width: ${props => InputWidth[props.width]};
  height: 40px;

  background-color: ${COLOR.GREY100};

  border-radius: 8px;
  border: none;

  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-align: center;

  opacity: 0.6;

  &:focus {
    outline: solid ${COLOR.BLUE};
  }
`;
