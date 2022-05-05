import styled from 'styled-components';

import SpanText from '../SpanText';

const TextEllipsisStyled = styled(SpanText)`
  width: 220px;   
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export default TextEllipsisStyled;
