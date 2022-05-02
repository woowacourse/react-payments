import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  width: 44px;
  height: 44px;
  color: #04c09e;
  font-size: 14px;
  font-weight: 700;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const NextButton = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

NextButton.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default NextButton;
