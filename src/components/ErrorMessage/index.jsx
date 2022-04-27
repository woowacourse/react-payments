import React from "react";
import styled from "styled-components";

const ErrorMessage = (props) => {
  return <Container>{props.message}</Container>;
};

const Container = styled.div`
  font-size: 14px;
  color: red;
  background-color: transparent;
`;
export default ErrorMessage;
