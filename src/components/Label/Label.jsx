import React from 'react';
import styled from 'styled-components';

const Label = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

const StyledLabel = styled.label`
  display: inline-block;

  font-size: 12px;
  line-height: 14px;
  vertical-align: top;

  margin-bottom: 4px;

  color: #525252;
`;

export default Label;
