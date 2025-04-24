import styled from '@emotion/styled';

import { Props } from '.';

export const StyledCustomImage = styled.img<Props>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
`;
