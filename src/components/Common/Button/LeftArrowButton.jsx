import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseButton from './BaseButton';

const StyledLeftArrowButton = styled(BaseButton)`
  width: 10.43px;
  height: 10.43px;
  padding: 5px;
  font-size: 20px;
  border: 1.5px solid #525252;
  border-style: hidden hidden solid solid;
  box-sizing: border-box;
  transform: rotate(45deg);
  margin: 0 20px 5px 0;
`;

function LeftArrowButton({ ...rest }) {
  return <StyledLeftArrowButton {...rest} />;
}

LeftArrowButton.propTypes = {
  children: PropTypes.string,
};

export default LeftArrowButton;
