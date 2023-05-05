import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

function FormLabel({ children }: Props) {
  return <StyledLabel>{children}</StyledLabel>;
}

export const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.085em;
  color: var(--primary-text-color);
  margin-top: 16px;
`;

export default FormLabel;
