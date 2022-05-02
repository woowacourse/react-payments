import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.label`
  color: #525252;
  font-size: 12px;
`;

const Label = ({ id, description }) => {
  return <Container htmlFor={id}>{description}</Container>;
};

Label.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
};

export default Label;
