import styled from 'styled-components';
import { MINT } from '../../../constants/palette';
import { vibrate } from '../../../utils/vibrate';

interface Props {
  underline?: boolean;
  textCenter?: boolean;
  width?: string;
  color?: string;
  height?: string;
}

const Input = styled.input<Props>`
  height: ${({ height }) => height || `3.375rem`};
  border: none;
  outline: none;
  font-size: 1.125rem;
  color: ${({ color }) => color || MINT[500]};
  background-color: transparent;
  width: ${({ width }) => width || '100%'};
  ${({ textCenter }) => textCenter && `text-align: center;`}
  ${({ underline }) => underline && `border-bottom: 1px solid #737373;`}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

Input.defaultProps = {
  onTouchEnd: () => vibrate(),
};

export default Input;
