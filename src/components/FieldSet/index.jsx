import React from "react";
import styled from "styled-components";
import Label from "../Label/index";
import ErrorMessage from "../ErrorMessage/index";
import PropTypes from "prop-types";

const FieldSet = ({ id, description, children, errorMessage }) => {
  return (
    <Container>
      <Label id={id} description={description} />
      {children}
      <ErrorMessage message={errorMessage} />
    </Container>
  );
};

FieldSet.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  children: PropTypes.element,
};

const Container = styled.fieldset`
  border: none;

  > * {
    &:last-child {
      margin-top: 10px;
    }
    &:first-child {
      display: block;
      margin-bottom: 10px;
    }
  }
`;

export default FieldSet;
