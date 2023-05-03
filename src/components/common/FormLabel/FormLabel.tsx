import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

function FormLabel({ children }: Props) {
  return <StyledLabel>{children}</StyledLabel>;
}

export const StyledLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.085em;
  color: var(--primary-text-color);
  margin-top: 16px;
  margin-bottom: 3px;
`;

export default FormLabel;
