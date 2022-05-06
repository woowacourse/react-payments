import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseButton from './BaseButton';

const StyledSubmitButton = styled(BaseButton)`
  position: absolute;
  top: 650px;
  right: 15px;
  color: #04c09e;
`;

function SubmitButton({ children, ...rest }) {
  return <StyledSubmitButton {...rest}>{children}</StyledSubmitButton>;
}

SubmitButton.propTypes = {
  children: PropTypes.string,
};

export default SubmitButton;
