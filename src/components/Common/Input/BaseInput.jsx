import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBaseInput = styled.input``;

function BaseInput({ children, ...rest }) {
  return <StyledBaseInput {...rest}>{children}</StyledBaseInput>;
}

BaseInput.propTypes = {
  children: PropTypes.string,
};

export default BaseInput;
