import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.input`
  text-align: center;
  width: ${(props) => InputScaleType[props.scale]}px;
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
  medium: '70',
  small: '43',
};

const Input = React.forwardRef(({ scale, ...rest }, ref) => {
  return <InputWrapper ref={ref} scale={scale} {...rest} />;
});

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  scale: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  textAlign: PropTypes.string.isRequired,
};

export default Input;
