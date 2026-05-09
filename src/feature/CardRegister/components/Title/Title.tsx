import type {ComponentPropsWithoutRef} from 'react';
import styled from 'styled-components';

const StyledTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;

const Title = ({children, ...rest}: ComponentPropsWithoutRef<'span'>) => {
  return <StyledTitle {...rest}>{children}</StyledTitle>;
};

export default Title;
