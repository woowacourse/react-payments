import { PropsWithChildren, LabelHTMLAttributes } from 'react';
import styled from 'styled-components';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const StyledLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  border: 0;
  clip: rect(0 0 0 0);
`;

export default function Label({ children, ...props }: PropsWithChildren<LabelProps>) {
  return <StyledLabel {...props}>{children}</StyledLabel>;
}
