import { PropsWithChildren } from 'react';
import styled from 'styled-components';

function ErrorSpan({ children }: PropsWithChildren) {
  return <StyleSpan>{children}</StyleSpan>;
}

export default ErrorSpan;

const StyleSpan = styled.label`
  font-size: 10px;
  font-weight: 600;

  color: red;
`;
