import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LabelWrapper = styled.label`
  color: #525252;
  font-size: 12px;
`;

const Label = ({ id, description }) => {
  return <LabelWrapper htmlFor={id}>{description}</LabelWrapper>;
};

Label.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
};

export default Label;
