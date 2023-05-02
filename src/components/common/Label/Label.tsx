import { HTMLAttributes } from 'react';
import styled from 'styled-components';

type LabelProps = HTMLAttributes<HTMLLabelElement> & {
  htmlFor: string;
};

export function Label({ children, ...props }: LabelProps) {
  return <_Label {...props}>{children}</_Label>;
}

const _Label = styled.label`
  font: ${(props) => props.theme.text.caption};
  color: ${(props) => props.theme.color.black};
`;
