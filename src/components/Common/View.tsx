import { type SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

const View = styled.div<{ style?: never; customStyle?: SerializedStyles }>`
  width: 100%;
  height: 100dvh;
  max-width: 376px;
  margin: 0 auto;
  padding: 16px 32px 0 32px;
  ${(props) => props.customStyle}
`;

export default View;
