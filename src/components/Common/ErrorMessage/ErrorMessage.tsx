import styled from '@emotion/styled';
import { ReactNode } from 'react';

export default function ErrorMessage({ children }: { children: ReactNode }) {
  return <Message>{children}</Message>;
}

const Message = styled.span`
  width: 100%;
  height: 14px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;
