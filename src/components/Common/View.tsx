import { type SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

const View = styled.div<{ style?: never; customStyle?: SerializedStyles }>`
  width: 100%;
  height: 100dvh;
  max-width: 376px;
  margin: 0 auto;
  padding: var(--spacing-16) var(--spacing-32) 0;
  ${(props) => props.customStyle}
`;

export default View;
