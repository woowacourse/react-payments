import styled from 'styled-components';
import { INPUT_SCALE_TYPE } from '../../constant';

export const Container = styled.input`
  text-align: center;
  width: ${({ scale }) => INPUT_SCALE_TYPE[scale]}px;
  height: 45px;
  background-color: #ecebf1;
  color: #04c09e;
  border: none;
  border-radius: 7px;

  &::placeholder {
    color: #737373;
    font-size: 18px;
  }
`;
