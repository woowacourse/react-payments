import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return <Container>{message}</Container>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

const Container = styled.div`
  font-size: 14px;
  color: red;
  background-color: transparent;
`;
export default ErrorMessage;
