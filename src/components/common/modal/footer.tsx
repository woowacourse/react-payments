import React from 'react';
import styled from 'styled-components';
import { getCustomChildren } from '../../../utils/getCustomChildren';

interface ChildProps {
  children: React.ReactNode;
}

export interface FooterProps extends ChildProps {
  isCustom?: boolean;
}

const Footer: React.FC<FooterProps> = ({ children, isCustom }) => {
  return isCustom ? (
    getCustomChildren(children, {})
  ) : (
    <StyledDefaultFooter>{children}</StyledDefaultFooter>
  );
};

const StyledDefaultFooter = styled.section`
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  padding: 10px;
`;

export default Footer;
