import { PropsWithChildren } from 'react';
import styled from 'styled-components';

function FormLabel({ children }: PropsWithChildren) {
  return <StyleLabel>{children}</StyleLabel>;
}

export default FormLabel;

const StyleLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;
