import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from '../Label/index';
import ErrorMessage from '../ErrorMessage/index';

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

const FieldSet = ({ id, description, children, errorMessage, isError }) => {
  return (
    <Container>
      <Label id={id} description={description} />
      {children}
      {isError && <ErrorMessage message={errorMessage} />}
    </Container>
  );
};

FieldSet.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  children: PropTypes.element,
};

export default FieldSet;
