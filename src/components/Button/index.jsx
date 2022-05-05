import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NextButtonWrapper = styled.button`
  width: 44px;
  height: 44px;
  color: #04c09e;
  font-size: 14px;
  font-weight: 700;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const NextButton = ({ children, name, onClick }) => {
  return (
    <NextButtonWrapper name={name} type="button" onClick={onClick}>
      {children}
    </NextButtonWrapper>
  );
};

NextButton.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NextButton;
