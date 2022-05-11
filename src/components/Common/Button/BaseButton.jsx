import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBaseButton = styled.button`
  width: fit-content;
  text-align: center;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;
`;

function BaseButton({ children, ...rest }) {
  return <StyledBaseButton {...rest}>{children}</StyledBaseButton>;
}

BaseButton.propTypes = {
  children: PropTypes.string,
};

export default BaseButton;
