import styled from '@emotion/styled';
import { ComponentProps } from 'react';

interface LabelProps extends Omit<ComponentProps<'label'>, 'children'> {
  children: React.ReactNode;
}

export default function Label({ children, ...props }: LabelProps) {
  return <Text {...props}>{children}</Text>;
}

const Text = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  color: #0a0d13;
`;
