import React from 'react';
import styled from 'styled-components';

const Label = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

const StyledLabel = styled.label`
  display: block;

  font-size: 12px;
  line-height: 14px;
  vertical-align: top;

  margin-bottom: 8px;

  color: #525252;

  .name-length {
    float: right;
  }
`;

export default Label;
