import styled from 'styled-components';

import { ButtonStyleProps } from './type';

export const Button = styled.button<ButtonStyleProps>`
  background-color: ${(props) => (props.disabled ? '#E7E7E7' : '#21273e')};
  color: ${(props) => (props.disabled ? '#B0B3BF' : '#FBFEFE')};
  transition: background-color 0.2s ease, color 0.2s ease;
  padding: 5px 20px;
  border-radius: 4px;
  border: none;
  font-weight: 700;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: none;
`;

export default {};
