import React from 'react';
import styled from 'styled-components';
import { FONT_PRIMARY_COLOR, PLACEHOLDER_PRIMARY_COLOR } from '../../style';

const InputBox = styled.input`
  background-color: #ecebf1;
  height: 45px;
  min-width: 50px;
  width: 100%;
  text-align: center;
  outline-offset: 2px;
  border: none;

  &::placeholder {
    color: ${PLACEHOLDER_PRIMARY_COLOR};
  }
  &:focus {
    outline: 1px solid ${PLACEHOLDER_PRIMARY_COLOR};
  }
  &:disabled {
    color: ${FONT_PRIMARY_COLOR};
  }
`;

const Input = React.forwardRef(({ onChange, type, ...rest }, ref) => (
  <InputBox ref={ref} onChange={onChange} type={type} {...rest} />
));

export default Input;
