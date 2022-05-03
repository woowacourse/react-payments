import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputScaleType = {
  large: '318',
  medium: '84',
  small: '43',
};

const Input = ({ scale, ...rest }) => {
  return <Container scale={scale} {...rest} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  scale: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string,
};

const Container = styled.input`
  text-align: center;
  width: ${({ scale }) => InputScaleType[scale]}px;
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

export default Input;
