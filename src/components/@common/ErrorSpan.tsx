import { PropsWithChildren } from 'react';
import styled from 'styled-components';

function ErrorSpan({ children }: PropsWithChildren) {
  return <StyleSpan>{children}</StyleSpan>;
}

export default ErrorSpan;

const StyleSpan = styled.label`
  font-size: 13px;
  font-weight: 600;
  line-height: 21px;
  color: red;
`;
