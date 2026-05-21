import { type SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

const VisuallyHidden = styled.div<{ style?: never; customStyle?: SerializedStyles }>`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  /* stylelint-disable-next-line property-no-deprecated */
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  ${(props) => props.customStyle}
`;

export default VisuallyHidden;
