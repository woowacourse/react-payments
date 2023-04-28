import { DOMAttributes } from 'react';
import styled from 'styled-components';

interface Flex extends DOMAttributes<HTMLDivElement> {
  width?: string;
  dir?: 'row' | 'column';
  justify?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

  align?: 'stretch' | 'center' | 'start' | 'end';
  scroll?: boolean;
}

const Flex = styled.div<Flex>`
  display: flex;
  flex-direction: ${({ dir = 'row' }) => dir};

  justify-content: ${({ justify = 'start' }) => justify};
  align-items: ${({ align = 'stretch' }) => align};

  width: ${({ width = '100%' }) => width};
  ${({ scroll }) => (scroll ? `overflow: scroll` : 'overflow: hidden')};
`;

export default Flex;
