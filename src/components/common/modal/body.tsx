import React from 'react';
import styled from 'styled-components';
import { getCustomChildren } from '../../../utils/getCustomChildren';

interface ChildProps {
  children: React.ReactNode;
}

export interface BodyProps extends ChildProps {
  isCustom?: boolean;
}

const Body: React.FC<BodyProps> = ({ children, isCustom }) => {
  return isCustom ? (
    getCustomChildren(children, {})
  ) : (
    <StyledDefaultBody>{children}</StyledDefaultBody>
  );
};

const StyledDefaultBody = styled.section`
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  padding: 10px;
`;

export default Body;
