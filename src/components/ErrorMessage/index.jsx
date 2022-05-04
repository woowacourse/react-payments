import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorMessageWrapper = styled.div`
  font-size: 14px;
  color: red;
  background-color: transparent;
`;

const ErrorMessage = ({ message }) => {
  return <ErrorMessageWrapper>{message}</ErrorMessageWrapper>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
