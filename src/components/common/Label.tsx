import React from 'react';
import styled from 'styled-components';

interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  children: React.ReactNode;
}

const Label = ({ children, ...props }: LabelProps) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;

const StyledLabel = styled.label`
  color: #0a0d13;
  font-size: 12px;
  line-height: 15px;
  font-weight: 500;
  margin-bottom: 8px;
`;
