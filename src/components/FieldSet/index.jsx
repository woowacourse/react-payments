import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from 'components/Label/index';
import ErrorMessage from 'components/ErrorMessage/index';

const FieldSetContainer = styled.fieldset`
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
    <FieldSetContainer>
      <Label id={id} description={description} />
      {children}
      {isError && <ErrorMessage message={errorMessage} />}
    </FieldSetContainer>
  );
};

FieldSet.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  children: PropTypes.element,
  isError: PropTypes.bool,
};

export default FieldSet;
