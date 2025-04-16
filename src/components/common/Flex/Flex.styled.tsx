import styled from '@emotion/styled';

import { Props } from '.';

export const StyledFlexBox = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  gap: ${({ gap = 0 }) => (typeof gap === 'number' ? `${gap}px` : gap)};
  align-items: ${({ alignItems = 'center' }) => alignItems};
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
  margin: ${({ margin = 0 }) => (typeof margin === 'number' ? `${margin}px` : margin)};
  padding: ${({ padding = 0 }) => (typeof padding === 'number' ? `${padding}px` : padding)};
  width: ${({ width = 'auto' }) => width};
  height: ${({ height = 'auto' }) => height};
`;
