import { SVGProps } from 'react';
import styled from 'styled-components';

type NavigatorProps = Omit<SVGProps<SVGSVGElement>, 'ref'> & {
  onClick?: () => void;
};

const Navigator = (props: NavigatorProps) => {
  return <StyledNavigator {...props} />;
};

export const StyledNavigator = styled.svg`
  margin-right: 24px;
  cursor: pointer;
`;

export default Navigator;
