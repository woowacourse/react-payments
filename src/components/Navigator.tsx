import React, { SVGProps } from 'react';
import styled from 'styled-components';

export const StyledNavigator = styled.svg`
  margin-right: 24px;
  cursor: pointer;
`;

type NavigatorProps = Omit<SVGProps<SVGSVGElement>, 'ref'> & {
  onClick?: () => void;
};

const Navigator = (props: NavigatorProps) => {
  return <StyledNavigator {...props} />;
};

export default Navigator;
