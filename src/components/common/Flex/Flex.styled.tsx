import styled from '@emotion/styled';

import { FlexProps } from './Flex.types';

export const StyledFlexBox = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
  align-items: ${({ alignItems = 'center' }) => alignItems};
  gap: ${({ gap = 0 }) => (typeof gap === 'number' ? `${gap}px` : gap)};
  flex: ${({ flex = 1 }) => flex};
  margin: ${({ margin = 0 }) => (typeof margin === 'number' ? `${margin}px` : margin)};
  padding: ${({ padding = 0 }) => (typeof padding === 'number' ? `${padding}px` : padding)};
  width: ${({ width = 'auto' }) => width};
  height: ${({ height = 'auto' }) => height};
`;
