import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.input`
  text-align: ${props => props.textAlign};
  width: ${props => InputScaleType[props.scale]}px;
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

const InputScaleType = {
  large: '318',
  medium: '84',
  small: '43',
};

const Input = ({ scale, textAlign = 'center', ...rest }) => {
  return <InputWrapper scale={scale} textAlign={textAlign} {...rest} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  scale: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  textAlign: PropTypes.string,
};

export default Input;
